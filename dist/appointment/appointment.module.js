"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const appointment_controller_1 = require("./appointment.controller");
const appoinment_provider_1 = require("./appoinment.provider");
const database_module_1 = require("../database/database.module");
const auth_module_1 = require("../auth/auth.module");
const users_providers_1 = require("../users/users.providers");
const service_provider_1 = require("../service/service.provider");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, auth_module_1.AuthModule],
        controllers: [appointment_controller_1.AppointmentController],
        providers: [
            appointment_service_1.AppointmentService,
            ...appoinment_provider_1.appointmentProviders,
            ...users_providers_1.usersProviders,
            ...service_provider_1.serviceProviders,
        ],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;
//# sourceMappingURL=appointment.module.js.map