import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';
import { UserModel } from 'src/user/user.model';

export function IsNotExists(table: string, validationOptions?: ValidationOptions) {
  return function(object: Record<string, any>, property: string) {
    registerDecorator({
      name: 'IsNotExists',
      target: object.constructor,
      propertyName: property,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments): Promise<boolean> {
          const user = await UserModel.findOne({
            where: {
              [args.property]: value,
            }
          })
          return !Boolean(user);
        },
      },
    })
  }
}

