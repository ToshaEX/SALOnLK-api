import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'jhon@gmail.com',
    description: 'email',
  })
  email: string;
  
  @IsNotEmpty()
  @ApiProperty({
    example: 'jhon@123',
    description: 'string',
  })
  password: string;
}
