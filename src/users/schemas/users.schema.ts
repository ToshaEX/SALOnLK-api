import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  gender: String,
  password: String,
});
