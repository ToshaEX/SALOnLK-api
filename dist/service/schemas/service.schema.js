"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchema = void 0;
const mongoose = require("mongoose");
const category_enum_1 = require("../enum/category.enum");
exports.ServiceSchema = new mongoose.Schema({
    category: { type: String, enum: category_enum_1.Category },
    sub_category: String,
    name: String,
    description: String,
    price: Number,
    time: Number,
    appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
});
//# sourceMappingURL=service.schema.js.map