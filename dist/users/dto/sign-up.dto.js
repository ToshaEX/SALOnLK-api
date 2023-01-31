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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = void 0;
const role_enum_1 = require("./../enum/role.enum");
const class_validator_1 = require("class-validator");
const users_enum_1 = require("../enum/users.enum");
const swagger_1 = require("@nestjs/swagger");
class SignUpDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Oshan', description: 'string' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Tharindu', description: 'string' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '0713206693', description: 'string' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ example: 'tharinduoshan@gmail.com', description: 'email' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(users_enum_1.Gender),
    (0, swagger_1.ApiProperty)({
        example: 'Male',
        description: 'type:string, allowed values ["Male","Female","Other"]',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'jhon@123',
        description: 'string',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(role_enum_1.Roles),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'enum',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "role", void 0);
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=sign-up.dto.js.map