import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './interfaces/users.interface';
import { JwtPayload } from 'src/auth/interface/JwtPayload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_MODEL') private readonly userModel: Model<User>, private readonly jwtService: JwtService,) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { password,email,first_name } = signUpDto;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const createdAuth = await this.userModel.create({
      ...signUpDto,
      password: hash,
    })
    await createdAuth.save()
    return
  }

  async isRegistered(email: string): Promise<boolean> {
    const find = await this.userModel.findOne({ email });
    return find ? true : false;
  }

  async findOne(email: string): Promise<User> {
    const find = await this.userModel.findOne({ email });
    return find;
  }
}
