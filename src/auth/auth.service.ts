import { JwtPayload } from './interface/JwtPayload.interface';
import { LoginDto } from './../users/dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    const user: User = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = {
        id: user._id,
        email: user.email,
        first_name: user.first_name,
        role: user.role,
      };
      return {
        accessToken: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException('Please check your credentials');
    }
  }
}
