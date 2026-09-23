import express from "express";  
import dotenv from 'dotenv';
import {getAllPosts} from './controllers/postController.js';
import {getPostById} from './controllers/postController.js';
dotenv.config();

const app = express();

app.get('/', (req,res)=>{
    return res.status(200).send('welcome to blogX');
});

app.get('/posts',getAllPosts);
app.get('/posts/:id',getPostById);

const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, ()=>{
    console.log(`blogX backend is started and is listening on ${PORT}`);
});

