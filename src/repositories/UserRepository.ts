import { User, IUser } from '../models';

class UserRepository {
    async findAll(): Promise<IUser[]> {
        return await User.find();
    }

    findById = async (id: string): Promise<IUser | null> => {
        return await User.findById(id);
    }

    findByEmail = async (email: string): Promise<IUser | null> => {
        return await User.findOne({ email });
    }

    create = async (userData: Partial<IUser>): Promise<IUser> => {
        const user = new User(userData);
        return await user.save();
    }

    update = async (user: IUser) => {

        const userObjectId = user._id;

        try {
            const updatedUser = await User.findByIdAndUpdate(userObjectId, user, { new: true });
            console.log(updatedUser);
            return updatedUser;
        } catch (error: any) {
            // console.log({ error: error?.message || error });
            return error?.message;

            throw new Error(error?.message);

            // if (error.code === 11000) {
            //     const field = Object.keys(error.keyPattern)[0]; // e.g., "email" or "username"
            //     const value = error.keyValue[field];
            //     return (`${field.charAt(0).toUpperCase() + field.slice(1)} "${value}" is already taken`);
            // }
        }
    }

    delete = async (id: string): Promise<IUser | null> => {
        return await User.findByIdAndDelete(id);
    }
}


export default new UserRepository();