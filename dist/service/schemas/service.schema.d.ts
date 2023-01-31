import * as mongoose from 'mongoose';
export declare const ServiceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    appointment: mongoose.Types.ObjectId[];
    name?: string;
    description?: string;
    sub_category?: string;
    price?: number;
    time?: number;
    category?: string;
}>;
