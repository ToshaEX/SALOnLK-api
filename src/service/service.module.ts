import { JwtService } from '@nestjs/jwt';

import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { DatabaseModule } from 'src/database/database.module';
import { serviceProviders } from './service.provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [ServiceController],
  providers: [ServiceService, ...serviceProviders],
})
export class ServiceModule {}
