import { CanActivate, Type } from '@nestjs/common';
import { Roles as Role } from '../../users/enum/role.enum';
export declare function RolesGuard(role: Role[]): Type<CanActivate>;
export default RolesGuard;
