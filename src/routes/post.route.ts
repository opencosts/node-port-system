import { Router } from 'express';

const router = Router();

import { PostController } from '../controllers';

router.get('/', PostController.index);
router.post('/', PostController.store);
router.get('/:id', PostController.show);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.destroy);

export default router; 