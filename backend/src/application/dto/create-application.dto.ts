import {Type} from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  ValidateNested
} from 'class-validator';
import {IsMinimumAge} from './validator';

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
}

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
  zipcode: string;
}

export class CreateApplicationDto {
  @ValidateNested()
  @Type(() => PersonDto)
  person: PersonDto;
}
