import { User, IUser } from '../../models'

class AuthRepository {

    login = async (userData: Partial<IUser>): Promise<IUser> => {
        const user = new User(userData);
        return await user.save();
    }

    logout = async (id: string): Promise<IUser | null> => {
        return await User.findByIdAndDelete(id);
    }
}


export default new AuthRepository();