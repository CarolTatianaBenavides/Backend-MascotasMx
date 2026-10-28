import { Router } from 'express';
import { createUser } from '../controllers/users.controllers.js';
import { loginUser, verifyAuthenticate } from '../controllers/auth.controllers.js';

import { authMiddleware } from '../middlewares/authenticate.middleware.js';
import { authorizationMiddleware } from '../middlewares/authorization.middleware.js';

// Crea una instancia de las rutas de Express
const router = Router();

// Define las rutas para la autenticacion

// 1. Registro publico de usuarios (default: CUSTOMER) Middleware asegurarme que solo se registre CUSTOMER
router.post( '/register', createUser );  // TODO: Filtremos que solo puedan registrarse usuarios con rol CUSTOMER, para eso debemos crear un middleware que valide el rol del usuario que se esta registrando  

// 2. Login de usuarios
router.post( '/login', loginUser );

// 3. Renovación de Credenciales (Token)
router.get( '/renew-token', authMiddleware, verifyAuthenticate );

// 4. Recuperar contraseña
// 5. Habilitar cuenta registrada publicamente


// Exportar las rutas definidas en este archivo
export default router;