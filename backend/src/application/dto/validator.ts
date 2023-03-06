const dayjs = require('dayjs');
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments
} from 'class-validator';

export function IsMinimumAge(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isMinimumAge',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          return dayjs().diff(value, 'year') >= 16;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be at least 16 years old`;
        }
      }
    });
  };
}
