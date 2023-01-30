import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty } from 'class-validator';
export class CreateAppointmentDto {
  @ApiProperty({  type: Date })
  @IsNotEmpty()
  @IsDateString()
  appointment_date: Date;

  @ApiProperty({  type: Number, isArray: true })
  @IsNotEmpty()
  @IsArray()
  slots: number[];

  @ApiProperty({  type: String })
  @IsNotEmpty()
  beautician: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  user: string;

  @ApiProperty({  type: String, isArray: true })
  @IsNotEmpty()
  services: string[];
}
