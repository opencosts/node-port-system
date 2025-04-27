import { Router } from 'express';
import { Document } from 'mongoose';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import userRoutes from './user.route';
import { User } from "../models";
import { AuthMiddleware } from '../middlewares';

declare global {
    namespace Express {
        interface Request {
            user?: typeof User & Document;
        }
    }
}

const router: Router = Router();

router.use('/auth', authRoutes);
// router.use('/posts', postRoutes);
router.use('/users', AuthMiddleware.auth, userRoutes);

export default router;
