import express from "express";  
import dotenv from 'dotenv';
import postsRoute from './routes/postsRoute.js';

console.log('blogX backend is starting...');
dotenv.config();
const app = express();
app.use('/api/v1/', postsRoute);

app.get('/', (req,res)=>{
    return res.status(200).send('welcome to blogX');
});



const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, ()=>{
    console.log(`blogX backend is started and is listening on ${PORT}`);
});

