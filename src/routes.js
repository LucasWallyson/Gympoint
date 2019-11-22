import { Router } from 'express';

import Usercontroller from './app/controllers/Usercontroller';
import Sessioncontroller from './app/controllers/Sessioncontroller';
import Studentscontroller from './app/controllers/Studentscontroller';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions1', Sessioncontroller.store1);
routes.post('/sessions2', Sessioncontroller.store2);
routes.post('/students', Studentscontroller.store);

routes.use(authMiddleware);

routes.put('/users', Usercontroller.update);
routes.put('/students', Studentscontroller.update);

export default routes;
