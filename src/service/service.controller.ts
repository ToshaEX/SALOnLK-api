import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { ApiOperation,  ApiTags } from '@nestjs/swagger';
import { UpdateServiceDto } from './dto/update-service.dto';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @ApiOperation({ summary: 'createService' })
  async createService(@Body() createServiceDto: CreateServiceDto) {
    return await this.serviceService.createService(createServiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'getAllServices' })
  async findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'getServiceById' })
  getServiceById(@Param('id') id: string) {
    return this.serviceService.getServiceById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'updateService' })
  updateService(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.serviceService.updateService(id, updateServiceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'deleteServiceById' })
  deleteServiceById(@Param('id') id: string) {
    return this.serviceService.deleteServiceById(id);
  }
}
