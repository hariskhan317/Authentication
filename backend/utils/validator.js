import { body, validationResult } from 'express-validator';

export const loginValidation = () => {
    return [ 
        body('email')
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email format is not correct"),
        body('password')
            .notEmpty().withMessage("password is required")
            .isLength({min:3}).withMessage("Password lenght is short"),
    ]
}

export const signupValidation = () => {
    return [
        body('name')
            .notEmpty().withMessage("name is required"),
        loginValidation(),
    ]
}

export const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const errMessage = errors.array().map(err => err.msg);
    return res.status(422).json({ errMessage });
}