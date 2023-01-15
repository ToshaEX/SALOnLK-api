import { IsNotEmpty } from 'class-validator';
export class CreateAppointmentDto {
    @IsNotEmpty()
    startDate:Date;

    @IsNotEmpty()
    endDate:Date;

    


    

}
