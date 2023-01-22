import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign-up.dto';

//  @ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Post('/signup')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async signUp(@Body() signUpDto: SignUpDto) {
    console.log("note yet  fail");
    const { email } = signUpDto;
    const find = await this.userService.isRegistered(email);
    if (find) {
      throw new UnauthorizedException('User already Registered.');
    }
    
    return this.userService.signUp(signUpDto);
  }
  
  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAllUsers(){
    return await this.userService.getAllUsers();
  }


}
