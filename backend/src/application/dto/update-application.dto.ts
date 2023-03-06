import {Type} from 'class-transformer';
import {IsNotEmpty, IsNumber, ValidateNested} from 'class-validator';
import {PersonDto} from './create-application.dto';

export class UpdateApplicationDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ValidateNested()
  @Type(() => PersonDto)
  person: PersonDto;
}
