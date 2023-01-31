"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
const role_enum_1 = require("../enum/role.enum");
exports.UsersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String,
    email: String,
    gender: String,
    password: String,
    role: { type: String, enum: role_enum_1.Roles, default: role_enum_1.Roles.USER },
    create_at: { type: Date, default: Date.now },
    appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }]
});
//# sourceMappingURL=users.schema.js.map