import { Router } from 'express';
const auth_routes: Router = Router();

import { AuthController } from '../controllers';

auth_routes.post('/login', AuthController.store);

auth_routes.post('/logout', AuthController.destroy);

export default auth_routes; 