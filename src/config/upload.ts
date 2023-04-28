import { registerAs } from '@nestjs/config';
import { diskStorage } from 'multer';
import { resolve } from 'path';

const uploadPath = resolve(process.cwd(), "uploads")

export default registerAs('upload', () => ({
  // https://github.com/expressjs/multer#multeropts
  storage: diskStorage({
    destination: uploadPath,
    filename(_req, file, cb) {
      const filename = [
        Date.now(),
        "_",
        Math.floor(Math.random() * 1000),
        ".",
        file.originalname.split('.').pop()
      ].join('')
      cb(null, filename)
    }
  })
}));
