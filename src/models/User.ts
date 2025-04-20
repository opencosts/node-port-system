import mongoose, { HydratedDocument, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { AutoIncrement } from "../utils";

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

    await AutoIncrement.setAutoIncrementId(user, "Users");

    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }

    next();
});

const Users = mongoose.model<IUser>('Users', userSchema);

export default Users;