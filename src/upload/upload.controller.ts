import { Controller, Get, Post, Response, StreamableFile, UnsupportedMediaTypeException, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { ServerResponse } from 'http';
import { join } from "path";
import { fileFilter, limits, Upload } from "./decorators/upload.decorator";
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  // 单文件上传(已经封装 Upload)
  @Post('/img')
  @Upload('file', {
    limits: limits(5), // 5M
    fileFilter: fileFilter('image') // 也可以自定义函数来过滤文件类型
  })
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return file;
  }


  // 上传文件(未做任何封装)
  @Post('/json')
  @UseInterceptors(FileInterceptor('file', {
    limits: {
      fileSize: Math.pow(1024, 2) * 2, // 2M
    },
    fileFilter(_req, file: Express.Multer.File, cb: Function): void {
      if (file.originalname.split('.').pop() === "json") {
        cb(null, true);
        return;
      }
      cb(new UnsupportedMediaTypeException('文件类型有误'), false)
    },
  }))
  uploadJSON(@UploadedFile() file: Express.Multer.File) {
    return file
  }

  // 多文件上传: 需要指定文件上传字段的 maxCount
  @Post('/imglist')
  @UseInterceptors(FileFieldsInterceptor([
    // 如果是一个字段多个文件
    {
      name: 'files',
      maxCount: 2,
    },
    // 如果有多个字段, 多个文件
    // { name: 'avatar', maxCount: 1 },
    // { name: 'background_image', maxCount: 2 },
  ]))
  uploadMultiFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files;
  }

  // 文件下载:默认类型是 application/octet-stream
  @Get('/download')
  download(@Response({ passthrough: true }) res: ServerResponse): StreamableFile {
    const package_json = join(process.cwd(), 'package.json')
    const fileStream = createReadStream(package_json);
    res.setHeader('Content-Type', 'application/json')
    // -- 设置这让个header, 让浏览器直接下载文件
    res.setHeader('Content-Disposition', 'attachment; filename="package.json"')
    return new StreamableFile(fileStream);
  }
}
