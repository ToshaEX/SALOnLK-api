/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { User } from 'src/users/interfaces/users.interface';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    createService(createServiceDto: CreateServiceDto): Promise<import("./interfaces/service.interface").Service>;
    findAll(user: User): Promise<import("./interfaces/service.interface").Service[]>;
    getServiceById(id: string): Promise<import("./interfaces/service.interface").Service>;
    updateService(id: string, updateServiceDto: UpdateServiceDto): Promise<import("./interfaces/service.interface").Service>;
    deleteServiceById(id: string): Promise<import("./interfaces/service.interface").Service & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
