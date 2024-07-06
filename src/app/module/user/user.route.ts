import express from 'express';
import { UserController } from './user.controller';


const router = express.Router();

//create a user
router.post(
    '/',
    UserController.createUser
);


export const UserRoutes = router;
