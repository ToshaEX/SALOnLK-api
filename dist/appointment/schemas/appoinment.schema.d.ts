import * as mongoose from 'mongoose';
export declare const AppointmentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    create_at: Date;
    slots: number[];
    services: mongoose.Types.ObjectId[];
    is_approved: string;
    user?: mongoose.Types.ObjectId;
    appointment_date?: Date;
    beautician?: mongoose.Types.ObjectId;
}>;
