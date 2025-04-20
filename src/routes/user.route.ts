import { Router } from 'express';

const post_routes = Router();

import { UserController } from '../controllers';

post_routes.get('/', UserController.index);
post_routes.post('/', UserController.store);
post_routes.get('/:id', UserController.show);
post_routes.put('/:id', UserController.update);
post_routes.delete('/:id', UserController.destroy);

export default post_routes;