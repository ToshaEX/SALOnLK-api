import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    getAllAppointment(): Promise<import("./interfaces/appoinment.interface").Appointment[]>;
    getAllUserAppointment(id: string, startDate: string, endDate: string): Promise<import("./interfaces/appoinment.interface").Appointment[]>;
    getAllUserAppointments(id: string): Promise<import("./interfaces/appoinment.interface").Appointment[]>;
    getUserSlot(id: string, startDate: string, endDate: string): Promise<number[]>;
    getAllServiceAppointment(id: string): Promise<import("./interfaces/appoinment.interface").Appointment[]>;
    createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<void>;
    updateStatus(id: string, updateStatusDto: UpdateStatusDto): Promise<void>;
}
