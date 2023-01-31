"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const users_schema_1 = require("./schemas/users.schema");
exports.usersProviders = [
    {
        provide: 'USERS_MODEL',
        useFactory: (mongoose) => mongoose.model('Users', users_schema_1.UsersSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map