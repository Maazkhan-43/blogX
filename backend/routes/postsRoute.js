import {getAllPosts,getPostById,createPost,updatepostByid} from '../controllers/postController.js';
import express from "express";

const router = express.Router();

router.get('/posts',getAllPosts);
router.get('/posts/:id',getPostById);
router.post('/posts',createPost);
router.post('/posts/:id',updatepostByid);
export default router;