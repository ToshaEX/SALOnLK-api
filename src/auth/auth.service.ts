import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  async signUp(signUpDto: SignUpDto): Promise<string> {
    console.log(signUpDto);
    return 'success';
  }

}