import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Gender } from '../users.model';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Oshan', description: 'string' })
  first_name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Tharindu', description: 'string' })
  last_name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '0713206693', description: 'string' })
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'tharinduoshan@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  @ApiProperty({
    example: 'Male',
    description: 'type:string, allowed values ["Male","Female","Other"]',
  })
  gender: Gender;

  @IsNotEmpty()
  @ApiProperty({
    example: 'jhon@123',
    description: 'string',
  })
  password: string;
}
