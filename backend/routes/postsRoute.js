import {getAllPosts,getPostById} from '../controllers/postController.js';
import express from "express";

const router = express.Router();

router.get('/posts',getAllPosts);
router.get('/posts/:id',getPostById);

export default router;