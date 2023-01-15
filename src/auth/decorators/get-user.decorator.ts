import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);