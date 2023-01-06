import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.providers';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...usersProviders,JwtService
  ],
  exports: [UsersService, ...usersProviders],
})
export class UsersModule {}
