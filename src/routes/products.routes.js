import { Router } from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/products.controllers.js";


// Crea una instancia de las rutas de Express
const router = Router();    

// Define las rutas para los productos
router.post( '/', createProduct );
router.get( '/', getProducts );
router.delete( '/:id', deleteProduct );
router.patch( '/:id', updateProduct );
router.get( '/:id', getProduct );


// Exportar las rutas definidas en este archivo
export default router;