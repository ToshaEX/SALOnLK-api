
import * as mongoose from 'mongoose';

export const AppointmentSchema = new mongoose.Schema({
  appointment_date: Date,
  slots: [Number],
  beautician_id: String,
  user_id: String,
  services: [String],
  create_at: { type: Date, default: Date.now },
});