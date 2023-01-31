"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProviders = void 0;
const service_schema_1 = require("./schemas/service.schema");
exports.serviceProviders = [
    {
        provide: 'SERVICE_MODEL',
        useFactory: (mongoose) => mongoose.model('Service', service_schema_1.ServiceSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=service.provider.js.map