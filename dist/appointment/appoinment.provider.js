"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentProviders = void 0;
const appoinment_schema_1 = require("./schemas/appoinment.schema");
exports.appointmentProviders = [
    {
        provide: 'APPOINTMENT_MODEL',
        useFactory: (mongoose) => mongoose.model('Appointment', appoinment_schema_1.AppointmentSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=appoinment.provider.js.map