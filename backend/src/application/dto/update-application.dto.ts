import {Type} from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  ArrayMaxSize,
  ArrayMinSize,
  Allow
} from 'class-validator';
import {AddressDto, PersonDto, VehicleDto} from './create-application.dto';

class UpdateAddressDto extends AddressDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

class UpdateVehicleDto extends VehicleDto {
  // Prevent whitelist from filtering ID while allowing create without ID
  @Allow()
  id: number;
}

class UpdatePersonDto extends PersonDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ValidateNested()
  @Type(() => UpdateAddressDto)
  address: UpdateAddressDto;

  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @ValidateNested({each: true})
  @Type(() => UpdateVehicleDto)
  vehicles: UpdateVehicleDto[];
}

export class UpdateApplicationDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ValidateNested()
  @Type(() => UpdatePersonDto)
  person: UpdatePersonDto;
}
