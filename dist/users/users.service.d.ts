import { Model } from 'mongoose';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './interfaces/users.interface';
import { Roles } from './enum/role.enum';
import { UpdateUserDto } from './dto/user-update.dto';
import { DeleteResult } from 'mongodb';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signUp(signUpDto: SignUpDto): Promise<void>;
    isRegistered(email: string): Promise<boolean>;
    findOne(email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<DeleteResult>;
    getUserCount(role: Roles): Promise<number>;
}
