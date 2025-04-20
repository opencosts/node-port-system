import { UserRepository } from '../repositories';
import { User, IUser } from '../models';
import bcrypt from "bcryptjs";

class UserService {

    getUsers = async (): Promise<IUser[]> => {
        return await UserRepository.findAll();
    };

    createUser = async (name: string, email: string, password: string): Promise<IUser> => {
        const user = new User({ name, email, password });
        return await UserRepository.create(user);
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await UserRepository.findById(id);
    }

    updateUser = async (id: string, name?: string, email?: string, password?: string, status?: 'Enable'): Promise<IUser | null> => {
        try {

            const user = await UserRepository.findById(id);
            if (!user) throw new Error('User  not found');

            if (email) user.email = email;

            if (password) user.password = await bcrypt.hash(password, 10);

            if (name) user.name = name;

            if (status) user.status = status;

            return await UserRepository.update(user);
        } catch (error: any) {
            throw new Error(error?.message);
        }

    }

    deleteUser = async (id: string): Promise<IUser | null> => {
        return await UserRepository.delete(id);
    }
}


export default new UserService;