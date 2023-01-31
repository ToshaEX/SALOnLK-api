import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { Roles } from './enum/role.enum';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    signUp(signUpDto: SignUpDto): Promise<void>;
    updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<import("./interfaces/users.interface").User>;
    getAllUsers(): Promise<import("./interfaces/users.interface").User[]>;
    userCount(role: Roles): Promise<number>;
    deleteUser(id: string): Promise<import("mongodb").DeleteResult>;
}
