import {Type} from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
  ValidationArguments
} from 'class-validator';
import {MAX_VEHICLE_YEAR, MIN_VEHICLE_YEAR} from 'src/constants';
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

class VehicleDto {
  @IsString()
  @IsNotEmpty()
  make: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  vin: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(MIN_VEHICLE_YEAR)
  @Max(MAX_VEHICLE_YEAR)
  year: number;
}

class PartialPersonDto {
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

export class PersonDto extends PartialPersonDto {
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @ValidateNested({each: true})
  @Type(() => VehicleDto)
  vehicles: VehicleDto[];
}

export class CreateApplicationDto {
  @ValidateNested()
  @Type(() => PartialPersonDto)
  person: PartialPersonDto;
}
