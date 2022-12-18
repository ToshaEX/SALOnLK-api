import { Inject, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_MODEL') private readonly userModel: Model<User>) {}

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const { email } = signUpDto;
    const find = await this.isRegistered(email);
    if (find) {
      throw new UnauthorizedException('User already Registered.');
    }
    const createdAuth = await this.userModel.create(signUpDto);

    await createdAuth.save();
    return 'success';
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
