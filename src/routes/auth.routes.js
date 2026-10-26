import { Router } from 'express';
import { createUser } from '../controllers/users.controllers.js';
import { loginUser, verifyAuthenticate } from '../controllers/auth.controllers.js';

// Crea una instancia de las rutas de Express
const router = Router();

// Define las rutas para la autenticacion

// 1. Registro publico de usuarios (default: CUSTOMER) Middleware asegurarme que solo se registre CUSTOMER
router.post( '/register', createUser );     

// 2. Login de usuarios
router.post( '/login', loginUser );

// 3. Renovación de Credenciales (Token)
router.get( '/renew-token', verifyAuthenticate );

// 4. Recuperar contraseña
// 5. Habilitar cuenta registrada publicamente


// Exportar las rutas definidas en este archivo
export default router;