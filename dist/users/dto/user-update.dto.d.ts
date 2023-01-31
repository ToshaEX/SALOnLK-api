import { SignUpDto } from "./sign-up.dto";
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<SignUpDto, "password">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
