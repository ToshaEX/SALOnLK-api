import { ApiProperty } from '@nestjs/swagger';
import { Category } from './../enum/category.enum';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  @IsEnum(Category)
  @ApiProperty({ example: 'Hair', description: 'Enum', enum: Category })
  category: Category;

  @IsNotEmpty()
  @ApiProperty({ example: 'Hair cut', description: 'string' })
  name: string;

  @ApiProperty({ example: 'Color', description: 'string' })
  sub_category: string;

  @IsNotEmpty()
  @ApiProperty({
    example:
      'A trim on the bang area. Shampoo, conditioner and scalp massage not included.',
    description: 'string',
  })
  description: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    example: '35',
    description: 'number',
  })
  price: number;
  
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    example: '30',
    description: 'Time in minutes',
  })
  time: string;
}
