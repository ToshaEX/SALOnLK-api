import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose
        .set('strictQuery', true)
        .connect(
          'mongodb+srv://oshan:rhdotr@salonlk.dqcqdw1.mongodb.net/?retryWrites=true&w=majority',
        ),
  },
];
