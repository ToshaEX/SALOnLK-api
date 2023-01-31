"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const passport_1 = require("@nestjs/passport");
function RolesGuard(role) {
    class RoleGuardMixin extends (0, passport_1.AuthGuard)('jwt') {
        async canActivate(context) {
            const request = context.switchToHttp().getRequest();
            const user = request.user;
            console.log(user.role, role);
            if (user && user.role) {
                return role.includes(user.role);
            }
            return false;
        }
    }
    return RoleGuardMixin;
}
exports.RolesGuard = RolesGuard;
exports.default = RolesGuard;
//# sourceMappingURL=role.guard.js.map