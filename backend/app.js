import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import appRouter from './routes/index.js'

config();
const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use('/api/v1', appRouter);



export default app;