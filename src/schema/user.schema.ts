import mongoose, { HydratedDocument } from 'mongoose';
import { userType } from 'src/models/User.model';

export type userDocument = HydratedDocument<typeof userSchema>

export const userSchema = new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    phone_number: String,
    user_type: String, 
});