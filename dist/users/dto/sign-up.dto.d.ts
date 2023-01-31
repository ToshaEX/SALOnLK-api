import { Roles } from './../enum/role.enum';
import { Gender } from '../enum/users.enum';
export declare class SignUpDto {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    gender: Gender;
    password: string;
    role: Roles;
}
