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

/*
  The @Allow decorator is used to prevent whitelist from filtering ID, while
  also allowing creation of address and vehicles through the PUT endpoint.
  Since they are new entities they do not have IDs.
*/
class UpdateAddressDto extends AddressDto {
  @Allow()
  id: number;
}

class UpdateVehicleDto extends VehicleDto {
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
