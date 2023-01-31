import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Model } from 'mongoose';
import { Appointment } from './interfaces/appoinment.interface';
import { User } from 'src/users/interfaces/users.interface';
import { Service } from 'src/service/interfaces/service.interface';
export declare class AppointmentService {
    private readonly appointmentModel;
    private readonly userModel;
    private readonly serviceModel;
    constructor(appointmentModel: Model<Appointment>, userModel: Model<User>, serviceModel: Model<Service>);
    createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<void>;
    getAllAppointment(): Promise<Appointment[]>;
    getAllUserAppointment(id: string, startDate: Date, endDate: Date): Promise<Appointment[]>;
    getAllUserAppointments(id: string): Promise<Appointment[]>;
    getUserSlot(id: string, startDate: Date, endDate: Date): Promise<number[]>;
    getAllServiceAppointment(id: string): Promise<Appointment[]>;
    updateStatus(id: string, updateStatusDto: UpdateStatusDto): Promise<void>;
    remove(id: number): string;
}
