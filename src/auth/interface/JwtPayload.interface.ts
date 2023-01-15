import { Roles } from './../../users/enum/role.enum';
export interface JwtPayload {
  id:string;
  email: string;
  first_name: string;
  role: Roles;
}
