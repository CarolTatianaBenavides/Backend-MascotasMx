import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categories.controllers.js";


// Crea una instancia de las rutas de Express
const router = Router();    

// Define las rutas para las categorias
router.post( '/', createCategory );
router.get( '/', getCategories );
router.delete( '/:id', deleteCategory );
router.patch( '/:id', updateCategory );
router.get( '/:id', getCategory );


// Exportar las rutas definidas en este archivo
export default router;