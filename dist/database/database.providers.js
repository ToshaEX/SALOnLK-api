"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await mongoose
            .set('strictQuery', true)
            .connect('mongodb+srv://oshan:rhdotr@salonlk.dqcqdw1.mongodb.net/?retryWrites=true&w=majority'),
    },
];
//# sourceMappingURL=database.providers.js.map