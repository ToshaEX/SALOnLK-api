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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  @ApiOperation({ summary: 'getAllAppointment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllAppointment() {
    return this.appointmentService.getAllAppointment();
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'getAllUserAppointment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllUserAppointment(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const convertedStartDate = new Date(startDate);
    const convertedEndDate = new Date(endDate);
    return this.appointmentService.getAllUserAppointment(
      id,
      convertedStartDate,
      convertedEndDate,
    );
  }
  @Get('user/all/:id')
  @ApiOperation({ summary: 'getAllUserAppointments' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllUserAppointments(
    @Param('id') id: string,
  
  ) {
    return this.appointmentService.getAllUserAppointments(
      id
    );
  }

  @Get('user/:id/slots')
  @ApiOperation({ summary: 'getUserSlot' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
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
  @ApiOperation({ summary: 'getAllServiceAppointment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllServiceAppointment(@Param('id') id: string) {
    return this.appointmentService.getAllServiceAppointment(id);
  }

  @ApiOperation({ summary: 'createAppointment' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.createAppointment(createAppointmentDto);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'updateStatus' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return this.appointmentService.updateStatus(id, updateStatusDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.appointmentService.remove(+id);
  // }
}
