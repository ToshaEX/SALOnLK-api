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

  findOne(id: string) {
    return `This action returns a #${id} service`;
  }

  async updateService(id: string, updateServiceDto: UpdateServiceDto) :Promise<Service>{
    return await this.serviceModel.findOneAndUpdate({_id:id},updateServiceDto)
  }

  async getServiceById(id: string): Promise<Service> {
    const find = await this.serviceModel.findById(id);
    return find;
  }

  async deleteServiceById(id: string) {
    return await this.serviceModel.findByIdAndDelete({_id:id})
  }
}
