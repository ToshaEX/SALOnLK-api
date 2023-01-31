"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const service_service_1 = require("./service.service");
const create_service_dto_1 = require("./dto/create-service.dto");
const swagger_1 = require("@nestjs/swagger");
const update_service_dto_1 = require("./dto/update-service.dto");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const role_guard_1 = require("../auth/guards/role.guard");
const role_enum_1 = require("../users/enum/role.enum");
let ServiceController = class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    async createService(createServiceDto) {
        return await this.serviceService.createService(createServiceDto);
    }
    async findAll(user) {
        console.log(user);
        return this.serviceService.findAll();
    }
    getServiceById(id) {
        return this.serviceService.getServiceById(id);
    }
    updateService(id, updateServiceDto) {
        return this.serviceService.updateService(id, updateServiceDto);
    }
    deleteServiceById(id) {
        return this.serviceService.deleteServiceById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, role_guard_1.default)([role_enum_1.Roles.BEAUTICIAN, role_enum_1.Roles.ADMIN])),
    (0, swagger_1.ApiOperation)({ summary: 'createService' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "createService", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'getAllServices' }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)([role_enum_1.Roles.BEAUTICIAN, role_enum_1.Roles.USER, role_enum_1.Roles.ADMIN])),
    (0, swagger_1.ApiOperation)({ summary: 'getServiceById' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "getServiceById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)([role_enum_1.Roles.BEAUTICIAN, role_enum_1.Roles.ADMIN])),
    (0, swagger_1.ApiOperation)({ summary: 'updateService' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)([role_enum_1.Roles.BEAUTICIAN, role_enum_1.Roles.ADMIN])),
    (0, swagger_1.ApiOperation)({ summary: 'deleteServiceById' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "deleteServiceById", null);
ServiceController = __decorate([
    (0, swagger_1.ApiTags)('Service'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map