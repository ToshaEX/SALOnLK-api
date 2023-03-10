import { JwtPayload } from './../interface/JwtPayload.interface';
import { Strategy } from 'passport-jwt';
import { User } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
