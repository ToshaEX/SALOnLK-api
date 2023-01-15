import * as mongoose from 'mongoose';
import { Roles } from '../enum/role.enum';

export const UsersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  gender: String,
  password: String,
  role: { type: String, enum: Roles },
  // appointment: [{type:mongoose.Schema.Types.ObjectId,ref:""}]
});
