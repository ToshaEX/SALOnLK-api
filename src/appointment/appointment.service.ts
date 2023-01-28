import { Inject, Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Model } from 'mongoose';
import { Appointment } from './interfaces/appoinment.interface';
import { User } from 'src/users/interfaces/users.interface';
import { Service } from 'src/service/interfaces/service.interface';

@Injectable()
export class AppointmentService {
  constructor(
    @Inject('APPOINTMENT_MODEL')
    private readonly appointmentModel: Model<Appointment>,
    @Inject('USERS_MODEL') private readonly userModel: Model<User>,
    @Inject('SERVICE_MODEL') private readonly serviceModel: Model<Service>,
  ) {}
  async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<void> {
    const {
      beautician: beauticianId,
      user: userId,
      services: servicesArr,
    } = createAppointmentDto;

    const appointment = await this.appointmentModel.create(
      createAppointmentDto,
    );

    const beautician = await this.userModel
      .findOne({ _id: beauticianId })
      .populate('appointment');
    beautician.appointment.push(appointment);
    beautician.save();

    const user = await this.userModel
      .findOne({ _id: userId })
      .populate('appointment');
    user.appointment.push(appointment);
    user.save();

    servicesArr.forEach(async service => {
      const getService = await this.serviceModel
        .findOne({ _id: service })
        .populate('appointment');
      getService.appointment.push(appointment);
      getService.save();
    });
    return;
  }

  async getAllAppointment(): Promise<Appointment[]> {
    const appointments = await this.appointmentModel
      .find()
      .populate(['user', 'services', 'beautician']);
    return appointments;
  }

  async getAllUserAppointment(id: string): Promise<Appointment[]> {
    const user = await this.userModel.findById(id).populate(['appointment']);
    return user.appointment;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
