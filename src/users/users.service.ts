import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './interfaces/users.interface';
import { Roles } from './enum/role.enum';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_MODEL') private readonly userModel: Model<User>) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { password } = signUpDto;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const createdAuth = await this.userModel.create({
      ...signUpDto,
      password: hash,
    });
    await createdAuth.save();
    return;
  }

  async isRegistered(email: string): Promise<boolean> {
    const find = await this.userModel.findOne({ email });
    return find ? true : false;
  }

  async findOne(email: string): Promise<User> {
    const find = await this.userModel.findOne({ email });
    return find;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel
      .find({ role: [Roles.ADMIN, Roles.BEAUTICIAN] })
      .exec();
  }
  async updateUserById(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      returnOriginal: false,
    });
  }
}
