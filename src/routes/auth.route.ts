import { Router } from 'express';

const router = Router();

import { AuthController } from '../controllers';

router.post('/login', AuthController.store);

router.post('/logout', AuthController.destroy);

export default router; 