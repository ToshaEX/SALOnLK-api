import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.createAppointment(createAppointmentDto);
  }

  @Get()
  getAllAppointment() {
    return this.appointmentService.getAllAppointment();
  }

  @Get('user/:id')
  getAllUserAppointment(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const convertedStartDate = new Date(startDate);
    const convertedEndDate = new Date(endDate);
    return this.appointmentService.getAllUserAppointment(id, convertedStartDate,convertedEndDate);
  }

  @Get('user/:id/slots')
  getUserSlot(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const convertedStartDate = new Date(startDate);
    const convertedEndDate = new Date(endDate);
    return this.appointmentService.getUserSlot(
      id,
      convertedStartDate,
      convertedEndDate,
    );
  }
  @Get('service/:id')
  getAllServiceAppointment(@Param('id') id: string) {
    return this.appointmentService.getAllServiceAppointment(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(+id);
  }

  @Patch(':id')
  updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return this.appointmentService.updateStatus(id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(+id);
  }
}
