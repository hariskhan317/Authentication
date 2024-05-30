import mongoose from "mongoose";

export const mongooseConnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
    }
}