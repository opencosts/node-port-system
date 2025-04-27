import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { publicKey } from '../secrets';
import { User } from "../models";
import { sanitizeUser } from "../utils";


class AuthMiddleware {

    auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            res.status(401).json({ message: 'Access Denied. No Token Provided.' });
            return;
        }

        try {

            const decoded = await new Promise<{ id: string }>((resolve, reject) => {
                jwt.verify(token, publicKey, (err, decoded) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(decoded as { id: string });
                });
            });

            const userId = decoded.id;

            const user = await User.findById(userId).exec();

            const sntUser = sanitizeUser(user);

            if (!user) {
                res.status(401).json({ message: 'User  not found.' });
                return;
            }
            req.loggedUser = { ...sntUser };

            next();
        } catch (error) {
            // console.log(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

}


export default new AuthMiddleware(); 
