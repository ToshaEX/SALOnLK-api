import { Appointment } from 'src/appointment/interfaces/appoinment.interface';
import { Roles } from './../enum/role.enum';
import { Document } from 'mongoose';
export interface User extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly role: Roles;
    readonly email: string;
    readonly gender: string;
    readonly password: string;
    appointment: [Appointment];
}
