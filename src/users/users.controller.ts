import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign-up.dto';
import { Param } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UpdateUserDto } from './dto/user-update.dto';

//  @ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signUp(@Body() signUpDto: SignUpDto) {
    console.log('note yet  fail');
    const { email } = signUpDto;
    const find = await this.userService.isRegistered(email);
    if (find) {
      throw new UnauthorizedException('User already Registered.');
    }

    return this.userService.signUp(signUpDto);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateUserById(@Param('id') id: string,@Body() updateUserDto:UpdateUserDto) {
    // const find = await this.userService.findOne(id);
    // if (!find) {
    //   throw new NotFoundException('No user found');
    // }
    return await this.userService.updateUserById(id,updateUserDto );
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
