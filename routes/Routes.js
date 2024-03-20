import express from 'express';
import { CreateNotas, DeleteNotas, UpdateNotas, getAll, getNotas } from '../controllers/Notascontroller.js';
const router = express.Router();
//Notas API
router.get('/', getAll)
router.get('/:id', getNotas)
router.post('/', CreateNotas)
router.put('/:id', UpdateNotas)
router.delete('/:id', DeleteNotas)
export default router;
// Here other API enpoints/
