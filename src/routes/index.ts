import { Router } from 'express';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import userRoutes from './user.route';

const router: Router = Router();

router.use('/auth', authRoutes);
// router.use('/posts', postRoutes);
router.use('/users', userRoutes);

export default router;
