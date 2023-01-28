import { ApiProperty, } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
export class CreateAppointmentDto {
  @ApiProperty({ name: 'Appointment date', type: Date })
  @IsNotEmpty()
  appointment_date: Date;

  @ApiProperty({ name: 'Slots', type: Number, isArray: true })
  @IsNotEmpty()
  @IsArray()
  slots: number[];

  @ApiProperty({ name: 'Beautician ID', type: String })
  @IsNotEmpty()
  beautician_id: string;

  @ApiProperty({ name: 'User ID', type: String })
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ name: 'Service ID Array', type: String, isArray: true })
  @IsNotEmpty()
  services: string[];
}
