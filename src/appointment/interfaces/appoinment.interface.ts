import { Status } from './../enum/status.enum';
import { Document } from 'mongoose';

export interface Appointment extends Document {
  readonly is_approved:Status;
  readonly appointment_date: Date;
  readonly slots: number[];
  readonly beautician_id: string;
  readonly user_id: string;
  readonly services: string[];
}