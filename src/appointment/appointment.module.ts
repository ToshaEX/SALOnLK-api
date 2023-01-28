import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { appointmentProviders } from './appoinment.provider';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { usersProviders } from 'src/users/users.providers';
import {serviceProviders} from "src/service/service.provider"

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AppointmentController],
  providers: [
    AppointmentService,
    ...appointmentProviders,
    ...usersProviders,
    ...serviceProviders,
  ],
})
export class AppointmentModule {}
