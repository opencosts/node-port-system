import { AuthRepository, UserRepository } from '../../repositories';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { config } from '../../config';
import { sanitizeUser } from '../../utils';
import { User } from '../../models';
import { privateKey } from '../../secrets';


class AuthService {

    login = async (email: string, password: string) => {
        try {
            const user = await User.findOne({ email: email, status: "Enable" });

            // const user = await UserRepository.findByEmail(email);

            if (!user) {
                throw new Error('Invalid email or password');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                throw new Error('Invalid email or password');
            }

            const cleanUser = sanitizeUser(user);

            const signOptions: object = { algorithm: 'RS256', expiresIn: '1h' };
            const token = jwt.sign({ ...cleanUser }, privateKey, signOptions);
            // const token = jwt.sign({ cleanUser }, config.jwtSecret, { algorithm: 'HS256', expiresIn: '1h' });

            return token;

        } catch (error: any) {
            throw new Error(error?.message);
        }
    };

}


export default new AuthService();