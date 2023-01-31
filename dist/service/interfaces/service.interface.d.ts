import { Document } from 'mongoose';
import { Category } from '../enum/category.enum';
import { Appointment } from 'src/appointment/interfaces/appoinment.interface';
export interface Service extends Document {
    category: Category;
    sub_category: string;
    name: string;
    description: string;
    price: number;
    time: number;
    appointment: [Appointment];
}
