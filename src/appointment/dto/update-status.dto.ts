import { Status } from './../enum/status.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateStatusDto {

    @IsNotEmpty()
    @IsEnum(Status)
    is_approved:Status
}
