import express from 'express';
import { CreateBlog, DeleteBlog, UpdateBlog, getAll, getBlog } from '../controllers/Blogcontroller.js';
const router = express.Router();
router.get('/', getAll)
router.get('/:id', getBlog)
router.post('/', CreateBlog)
router.put('/:id', UpdateBlog)
router.delete('/:id', DeleteBlog)
export default router;