import * as mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    role: string;
    appointment: mongoose.Types.ObjectId[];
    create_at: Date;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    gender?: string;
    password?: string;
}>;
