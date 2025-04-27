import mongoose, { HydratedDocument, Schema, ObjectId } from "mongoose";

export interface AuthInterface {
    _id?: ObjectId;
    name: string;
    email: string;
    // status: "Enable" | "Disable";
    // createdAt?: Date;
    // updatedAt?: Date;
    // createdBy?: mongoose.Types.ObjectId;
}