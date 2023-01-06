import { Document } from 'mongoose';
import { Category } from '../enum/category.enum';

export interface Service extends Document {
  category: Category;
  sub_category: string;
  name: string;
  description: string;
  price: number;
  time: number;
}
