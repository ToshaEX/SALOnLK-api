import { CanActivate, ExecutionContext, Type } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles as Role } from '../../users/enum/role.enum';

export function RolesGuard(role: Role[]): Type<CanActivate> {
  class RoleGuardMixin extends AuthGuard('jwt') {
    async canActivate(context: ExecutionContext) {
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

export default RolesGuard;
