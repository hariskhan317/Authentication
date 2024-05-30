import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/tokenManager.js'

export const getAllUser = async (req, res) => {
    const user = await User.find();
    res.status(200).send(user);
}

export const userSignup = async (req, res) => {
    try {
        const { name, email, password, photo } = req.body;
        // find a user using token
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).send("Already Register");
        }

        // saving a user
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashPassword, photo })
        res.clearCookie('auth_token',{
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'None', 
        })

        const token = createToken(user._id, user.email);

        res.cookie('auth_token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'None', 
        })

        await user.save(); 

        return res.status(200).json({status: 200, message: "Successfull Signup!", name: user.name, email: user.email});
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: 'Internal Server Error', cause:error.message });
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(422).send("Can't find the User");
        }
    
        const checkingPassword = bcrypt.compare(password, user.password)
        if (!checkingPassword) {
            return res.status(422).send({message:"Password is Incorrect"});
        }

        res.clearCookie('auth_token',{
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'None', 
        })

        const token = createToken(user._id, user.email);

        res.cookie('auth_token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'None', 
        })
    
        return res.status(200).send({ status: 200, message: "Successfull Login!", name: user.name, email: user.email });
    }
    catch (error) {
        return res.status(400).send({ message: 'Internal Server Error', cause:error.message });
    }
}