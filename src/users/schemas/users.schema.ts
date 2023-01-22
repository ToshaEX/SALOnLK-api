import * as mongoose from 'mongoose';
import { Roles } from '../enum/role.enum';

export const UsersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  gender: String,
  password: String,
  role: { type: String, enum: Roles ,default:Roles.USER},
  create_at: {type:Date,default:Date.now},
  // appointment: [{type:mongoose.Schema.Types.ObjectId,ref:""}]
});
