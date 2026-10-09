import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUserPatch, updateUserPut } from '../controllers/users.controllers.js';

const router = Router();

// Definicion de las rutas para usuarios
router.get('/', getUsers );
router.post('/', createUser );
router.put('/', updateUserPut );
router.patch('/', updateUserPatch );
router.delete('/', deleteUser );


export default router;