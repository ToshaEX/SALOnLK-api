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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
const swagger_1 = require("@nestjs/swagger");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    getAllAppointment() {
        return this.appointmentService.getAllAppointment();
    }
    getAllUserAppointment(id, startDate, endDate) {
        const convertedStartDate = new Date(startDate);
        const convertedEndDate = new Date(endDate);
        return this.appointmentService.getAllUserAppointment(id, convertedStartDate, convertedEndDate);
    }
    getAllUserAppointments(id) {
        return this.appointmentService.getAllUserAppointments(id);
    }
    getUserSlot(id, startDate, endDate) {
        const convertedStartDate = new Date(startDate);
        const convertedEndDate = new Date(endDate);
        return this.appointmentService.getUserSlot(id, convertedStartDate, convertedEndDate);
    }
    getAllServiceAppointment(id) {
        return this.appointmentService.getAllServiceAppointment(id);
    }
    createAppointment(createAppointmentDto) {
        return this.appointmentService.createAppointment(createAppointmentDto);
    }
    updateStatus(id, updateStatusDto) {
        return this.appointmentService.updateStatus(id, updateStatusDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'getAllAppointment' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAllAppointment", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'getAllUserAppointment' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAllUserAppointment", null);
__decorate([
    (0, common_1.Get)('user/all/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'getAllUserAppointments' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAllUserAppointments", null);
__decorate([
    (0, common_1.Get)('user/:id/slots'),
    (0, swagger_1.ApiOperation)({ summary: 'getUserSlot' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getUserSlot", null);
__decorate([
    (0, common_1.Get)('service/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'getAllServiceAppointment' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "getAllServiceAppointment", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'createAppointment' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'updateStatus' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], AppointmentController.prototype, "updateStatus", null);
AppointmentController = __decorate([
    (0, swagger_1.ApiTags)('Appointment'),
    (0, common_1.Controller)('appointment'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map