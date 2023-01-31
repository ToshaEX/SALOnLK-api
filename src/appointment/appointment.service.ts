import { Inject, Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Model, ObjectId } from 'mongoose';
import { Appointment } from './interfaces/appoinment.interface';
import { User } from 'src/users/interfaces/users.interface';
import { Service } from 'src/service/interfaces/service.interface';
import * as mongoose from 'mongoose';
import { AppointmentSchema } from './schemas/appoinment.schema';
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
      .sort({ appointment_date: 1 })
      .populate(['user', 'services', 'beautician']);
    return appointments;
  }

  async getAllUserAppointment(
    id: string,
    startDate: Date,
    endDate: Date,
  ): Promise<Appointment[]> {
    const user = await this.userModel
      .findOne({ _id: id })
      .populate('appointment')
      .then(rec => {
        return rec.appointment
          .filter(
            appointment =>
              startDate < appointment.appointment_date &&
              appointment.appointment_date < endDate,
          )
          .sort(
            (a, b) =>
              a.appointment_date.getTime() - b.appointment_date.getTime(),
          );
      });
    console.log(user);
    return user;
  }

  async getAllUserAppointments(id: string): Promise<Appointment[]> {
    const user = await this.userModel
      .findOne({ _id: id })
      .populate({
        path: 'appointment',
        populate: 'beautician services user',
      })

      .then(rec => {
        return rec.appointment.sort(
          (a, b) => b.appointment_date.getTime() - a.appointment_date.getTime(),
        );
      });
    console.log(user);
    return user;
  }

  async getUserSlot(
    id: string,
    startDate: Date,
    endDate: Date,
  ): Promise<number[]> {
    const user = await this.getAllUserAppointment(id, startDate, endDate);
    const slots = [];
    user.forEach(appointment => slots.push(...appointment.slots));
    return slots.sort((a, b) => a - b);
  }

  async getAllServiceAppointment(id: string): Promise<Appointment[]> {
    const user = await this.serviceModel.findById(id).populate(['appointment']);
    return user.appointment;
  }

  async updateStatus(
    id: string,
    updateStatusDto: UpdateStatusDto,
  ): Promise<void> {
    await this.appointmentModel.findOneAndUpdate(
      { _id: id },
      { is_approved: updateStatusDto.is_approved },
    );
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
