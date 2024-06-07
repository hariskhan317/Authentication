import { Router } from 'express';
import { verifyToken } from '../utils/tokenManager.js'
import { validation, loginValidation, signupValidation } from '../utils/validator.js'
import { getAllUser, userSignup, userLogin, authUser, userLogout, updateUser } from '../controllers/userControllers.js';
const userRoute = Router();

userRoute.get('/', verifyToken, getAllUser);
userRoute.get('/authUser', verifyToken, authUser);
userRoute.put('/updateUser', verifyToken, updateUser);
userRoute.post('/signup', signupValidation(), validation, userSignup);
userRoute.post('/login', loginValidation(), validation, userLogin);
userRoute.post('/logout', verifyToken, userLogout);

export default userRoute;