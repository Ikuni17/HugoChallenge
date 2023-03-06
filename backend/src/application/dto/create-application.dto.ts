import {Type} from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  ValidateNested,
  ValidationArguments
} from 'class-validator';
import {IsMinimumAge} from './validator';

class AddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, {
    message: (args: ValidationArguments) =>
      `${args.property} must be only digits`
  })
  @Length(5, 5, {
    message: (args: ValidationArguments) =>
      `${args.property} must be exactly 5 digits`
  })
  zipcode: string;
}

class PersonDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDateString()
  @IsNotEmpty()
  @IsMinimumAge()
  dateOfBirth: Date;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}

export class CreateApplicationDto {
  @ValidateNested()
  @Type(() => PersonDto)
  person: PersonDto;
}
