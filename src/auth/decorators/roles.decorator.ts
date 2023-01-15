import { SetMetadata } from '@nestjs/common';
import { Roles as Role } from 'src/users/enum/role.enum';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: Role[]) => {
  return SetMetadata(ROLES_KEY, roles);
};
