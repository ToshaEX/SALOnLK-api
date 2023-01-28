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
import { Delete, Param, Query } from '@nestjs/common/decorators';
import { UpdateUserDto } from './dto/user-update.dto';
import { Roles } from './enum/role.enum';


  @ApiBearerAuth()
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
    return await this.userService.updateUserById(id,updateUserDto );
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Get("/count?")
  @ApiOperation({ summary: 'Get user count' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async userCount(@Query("role") role:Roles) {
    return await this.userService.getUserCount(role);
  }
  
  @Delete("/:id")
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteUser(@Param("id") id:string){
    return await this.userService.deleteUser(id);
  }

  
  
}
