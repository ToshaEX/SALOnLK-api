import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/service.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    
    AuthModule,
    ServiceModule,
    AppointmentModule,
  ],
})
export class AppModule {}
