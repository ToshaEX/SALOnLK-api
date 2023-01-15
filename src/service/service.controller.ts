import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateServiceDto } from './dto/update-service.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/users/interfaces/users.interface';
import RolesGuard from 'src/auth/guards/role.guard';
import { Roles } from 'src/users/enum/role.enum';

@ApiTags('Service')
@UseGuards(AuthGuard())
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @UseGuards(RolesGuard([Roles.BEAUTICIAN, Roles.ADMIN]))
  @ApiOperation({ summary: 'createService' })
  async createService(@Body() createServiceDto: CreateServiceDto) {
    return await this.serviceService.createService(createServiceDto);
  }

  @Get()
  @UseGuards(RolesGuard([Roles.BEAUTICIAN, Roles.USER, Roles.ADMIN]))
  @ApiOperation({ summary: 'getAllServices' })
  async findAll(@GetUser() user: User) {
    console.log(user);
    return this.serviceService.findAll();
  }

  @Get(':id')
  @UseGuards(RolesGuard([Roles.BEAUTICIAN, Roles.USER, Roles.ADMIN]))
  @ApiOperation({ summary: 'getServiceById' })
  getServiceById(@Param('id') id: string) {
    return this.serviceService.getServiceById(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard([Roles.BEAUTICIAN, Roles.ADMIN]))
  @ApiOperation({ summary: 'updateService' })
  updateService(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.serviceService.updateService(id, updateServiceDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard([Roles.BEAUTICIAN, Roles.ADMIN]))
  @ApiOperation({ summary: 'deleteServiceById' })
  deleteServiceById(@Param('id') id: string) {
    return this.serviceService.deleteServiceById(id);
  }
}
