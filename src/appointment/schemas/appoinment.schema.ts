import * as mongoose from 'mongoose';
import { Status } from '../enum/status.enum';

export const AppointmentSchema = new mongoose.Schema({
  is_approved: { type: String, enum: Status, default: Status.PENDING },
  appointment_date: Date,
  slots: [Number],
  beautician: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  create_at: { type: Date, default: Date.now },
});
