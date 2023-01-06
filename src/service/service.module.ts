import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { DatabaseModule } from 'src/database/database.module';
import { serviceProviders } from './service.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ServiceController],
  providers: [ServiceService, ...serviceProviders],
})
export class ServiceModule {}
