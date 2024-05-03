import mongoose, { HydratedDocument } from 'mongoose';

export type residenceDocument = HydratedDocument<typeof residenceSchema>

export const residenceSchema = new mongoose.Schema({
    rating: Number,
    name: String,
    address: String,
    price: String,
    pricePer: String,
    rooms: Number, 
    space: Number,
    imageUrl: String
});