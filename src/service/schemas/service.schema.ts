import * as mongoose from 'mongoose';
import { Category } from '../enum/category.enum';

export const ServiceSchema = new mongoose.Schema({
  category: { type: String, enum: Category },
  sub_category: String,
  name: String,
  description: String,
  price: Number,
  time: Number,
  appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
});
