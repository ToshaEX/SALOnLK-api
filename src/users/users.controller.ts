import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign-up.dto';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly authService: UsersService) {}

  @Post('/signup')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
