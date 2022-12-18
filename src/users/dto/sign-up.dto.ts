/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Gender } from '../users.model';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ example: 'Oshan', description: 'string' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: 'Tharindu', description: 'string' })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ example: '0713206693', description: 'string' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'tharinduoshan@gmail.com', description: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Male',
    description: 'type:string, allowed values ["Male","Female","Other"]',
  })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({
    example: 'ukapan',
    description: 'string',
  })
  @IsNotEmpty()
  password: string;
}
