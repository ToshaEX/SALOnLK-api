import { Document } from 'mongoose';

export interface Appointment extends Document {
  readonly appointment_date: Date;
  readonly slots: number[];
  readonly beautician_id: string;
  readonly user_id: string;
  readonly services: string[];
}