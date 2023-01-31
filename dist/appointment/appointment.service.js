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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let AppointmentService = class AppointmentService {
    constructor(appointmentModel, userModel, serviceModel) {
        this.appointmentModel = appointmentModel;
        this.userModel = userModel;
        this.serviceModel = serviceModel;
    }
    async createAppointment(createAppointmentDto) {
        const { beautician: beauticianId, user: userId, services: servicesArr, } = createAppointmentDto;
        const appointment = await this.appointmentModel.create(createAppointmentDto);
        const beautician = await this.userModel
            .findOne({ _id: beauticianId })
            .populate('appointment');
        beautician.appointment.push(appointment);
        beautician.save();
        const user = await this.userModel
            .findOne({ _id: userId })
            .populate('appointment');
        user.appointment.push(appointment);
        user.save();
        servicesArr.forEach(async (service) => {
            const getService = await this.serviceModel
                .findOne({ _id: service })
                .populate('appointment');
            getService.appointment.push(appointment);
            getService.save();
        });
        return;
    }
    async getAllAppointment() {
        const appointments = await this.appointmentModel
            .find()
            .sort({ appointment_date: 1 })
            .populate(['user', 'services', 'beautician']);
        return appointments;
    }
    async getAllUserAppointment(id, startDate, endDate) {
        const user = await this.userModel
            .findOne({ _id: id })
            .populate('appointment')
            .then(rec => {
            return rec.appointment
                .filter(appointment => startDate < appointment.appointment_date &&
                appointment.appointment_date < endDate)
                .sort((a, b) => a.appointment_date.getTime() - b.appointment_date.getTime());
        });
        console.log(user);
        return user;
    }
    async getAllUserAppointments(id) {
        const user = await this.userModel
            .findOne({ _id: id })
            .populate({
            path: 'appointment',
            populate: 'beautician services user',
        })
            .then(rec => {
            return rec.appointment.sort((a, b) => b.appointment_date.getTime() - a.appointment_date.getTime());
        });
        console.log(user);
        return user;
    }
    async getUserSlot(id, startDate, endDate) {
        const user = await this.getAllUserAppointment(id, startDate, endDate);
        const slots = [];
        user.forEach(appointment => slots.push(...appointment.slots));
        return slots.sort((a, b) => a - b);
    }
    async getAllServiceAppointment(id) {
        const user = await this.serviceModel.findById(id).populate(['appointment']);
        return user.appointment;
    }
    async updateStatus(id, updateStatusDto) {
        await this.appointmentModel.findOneAndUpdate({ _id: id }, { is_approved: updateStatusDto.is_approved });
        return;
    }
    remove(id) {
        return `This action removes a #${id} appointment`;
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('APPOINTMENT_MODEL')),
    __param(1, (0, common_1.Inject)('USERS_MODEL')),
    __param(2, (0, common_1.Inject)('SERVICE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map