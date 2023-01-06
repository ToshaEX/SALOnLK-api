import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { ApiOperation,  ApiTags } from '@nestjs/swagger';

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
  @ApiOperation({ summary: 'getAllServices', })
  async findAll() {
    return this.serviceService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.serviceService.findOne(+id);
  // }

  // @Patch(':id')
  //  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
  //   return this.serviceService.update(+id, updateServiceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.serviceService.remove(+id);
  // }
}
