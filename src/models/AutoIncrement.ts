import mongoose, { Schema, Document } from "mongoose";

export interface IAutoIncrement extends Document {
    _id: string; // This will be the identifier for the counter
    seq: number; // This will hold the current sequence number
}

const autoIncrementSchema = new Schema<IAutoIncrement>({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const AutoIncrement = mongoose.model<IAutoIncrement>('Counter', autoIncrementSchema);

export default AutoIncrement;