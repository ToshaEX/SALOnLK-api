"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = void 0;
const mongoose = require("mongoose");
const status_enum_1 = require("../enum/status.enum");
exports.AppointmentSchema = new mongoose.Schema({
    is_approved: { type: String, enum: status_enum_1.Status, default: status_enum_1.Status.PENDING },
    appointment_date: Date,
    slots: [Number],
    beautician: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    create_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=appoinment.schema.js.map