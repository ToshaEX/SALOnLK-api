import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './../users/dto/login.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

// @ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto):Promise<{accessToken: string}> {
    console.log('req', loginDto);
    return await this.authService.login(loginDto);
  }
}
// @ApiOperation({ summary: 'Login' })
// @ApiResponse({ status: 403, description: 'Forbidden.' })
