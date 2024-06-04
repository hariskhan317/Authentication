import jwt from 'jsonwebtoken';

export const createToken = (id, email) => {
    const payload = {id, email}
    const token = jwt.sign(payload, process.env.JWT_TOKEN);  
    return token;
}

export const verifyToken = async(req, res, next) => {
    const token = await req.cookies.auth_token; 
    jwt.verify(token, process.env.JWT_TOKEN, (err, success) => {
        if (err) {
            console.log(err);
            return res.status(422).send({ message: "Token verification failed", cause: error.message})
        } 
        res.locals.jwtData = success;
        return next();
    })
}