"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const sign_up_dto_1 = require("./sign-up.dto");
class UpdateUserDto extends (0, mapped_types_1.OmitType)(sign_up_dto_1.SignUpDto, ["password"]) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=user-update.dto.js.map