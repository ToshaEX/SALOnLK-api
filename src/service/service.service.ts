import { ServiceSchema } from './schemas/service.schema';
import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Model } from 'mongoose';
import { Service } from './interfaces/service.interface';

@Injectable()
export class ServiceService {
  constructor(
    @Inject('SERVICE_MODEL') private readonly serviceModel: Model<Service>,
  ) {}
  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = await this.serviceModel.create(createServiceDto);
    service.save();
    return service;
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
