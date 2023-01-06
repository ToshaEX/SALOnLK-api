import { Mongoose } from 'mongoose';
import { ServiceSchema } from './schemas/service.schema';

export const serviceProviders = [
  {
    provide: 'SERVICE_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Service', ServiceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
