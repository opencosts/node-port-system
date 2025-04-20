import mongoose, { HydratedDocument, Schema } from "mongoose";
import bcrypt from "bcryptjs";

import AutoIncrement, { IAutoIncrement } from "./AutoIncrement"; // Adjust the path as necessary

interface IUser extends Document {
    id?: number;
    name: string;
    email: string;
    password: string;
    status: "Enable" | "Disable";
}


const userSchema = new Schema<IUser>({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Enable', 'Disable'],
        default: 'Enable'
    }
});

userSchema.pre("save", async function (next) {

    const user = this as HydratedDocument<IUser>;

    // if (user.isNew && typeof user.id === 'undefined') {
    //     const autoIncrement = await AutoIncrement.findOneAndUpdate(
    //         { _id: "Users" },
    //         { $inc: { seq: 1 } },
    //         { new: true, upsert: true }
    //     ).exec() as IAutoIncrement;

    //     user.id = autoIncrement?.seq;
    // }

    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }

    next();
});

const Users = mongoose.model<IUser>('Users', userSchema);

export default Users;