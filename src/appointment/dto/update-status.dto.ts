import { ApiProperty } from '@nestjs/swagger';
import { Status } from './../enum/status.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ enum:Status })
  @IsNotEmpty()
  @IsEnum(Status)
  is_approved: Status;
}
