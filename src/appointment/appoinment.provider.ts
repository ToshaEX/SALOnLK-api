import { Mongoose } from 'mongoose';
import { AppointmentSchema } from './schemas/appoinment.schema';

export const appointmentProviders = [
  {
    provide: 'APPOINTMENT_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Appointment', AppointmentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
