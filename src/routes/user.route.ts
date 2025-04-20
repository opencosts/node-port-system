import { Router } from 'express';
import { UserController } from '../controllers';
const user_routes = Router();

user_routes.get('/', UserController.index);
user_routes.post('/', UserController.store);
user_routes.get('/:id', UserController.show);
user_routes.put('/:id', UserController.update);
user_routes.delete('/:id', UserController.destroy);

export default user_routes;