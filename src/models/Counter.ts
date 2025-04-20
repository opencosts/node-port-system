import mongoose, { Schema, Document } from "mongoose";

export interface ICounter extends Document {
    _id: string; // This will be the identifier for the counter
    seq: number; // This will hold the current sequence number
}

const counterSchema = new Schema<ICounter>({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model<ICounter>('Counter', counterSchema);

export default Counter;