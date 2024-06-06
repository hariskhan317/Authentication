import { Router } from 'express';
import { verifyToken } from '../utils/tokenManager.js'
import { validation, loginValidation, signupValidation } from '../utils/validator.js'
import { getAllUser, userSignup, userLogin, authUser } from '../controllers/userControllers.js';
const userRoute = Router();

userRoute.get('/', verifyToken, getAllUser);
userRoute.get('/authUser', verifyToken, authUser);
userRoute.post('/signup', signupValidation(), validation, userSignup);
userRoute.post('/login', loginValidation(), validation, userLogin);

export default userRoute;