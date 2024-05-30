import { Router } from 'express';
import { validation, loginValidation, signupValidation } from '../utils/validator.js'
import { getAllUser, userSignup, userLogin } from '../controllers/userControllers.js';
const userRoute = Router();

userRoute.get('/', getAllUser);
userRoute.post('/signup', signupValidation(), validation, userSignup);
userRoute.post('/login', loginValidation(), validation, userLogin);

export default userRoute;