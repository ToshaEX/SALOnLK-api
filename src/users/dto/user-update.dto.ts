import { OmitType } from "@nestjs/mapped-types";
import { SignUpDto } from "./sign-up.dto";

export class UpdateUserDto extends OmitType(SignUpDto,["password"] as const){

}