import { Router } from "express";
import { createUser, deleteUser, getUsers, getUser, updateUser } from "../controllers/users.controllers.js";


// Crea una instancia de las rutas de Express
const router = Router();    

// Define las rutas para los usuarios
router.post( '/', createUser );
router.get( '/', getUsers );
router.delete( '/:id', deleteUser );
router.patch( '/:id', updateUser );
router.get( '/:id', getUser );


// Exportar las rutas definidas en este archivo
export default router;