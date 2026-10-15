// const express = require('express');   // CommonJS
import express from 'express';           // ESModule

import conexion from './config/mongo.config.js';  // Conexion a la base de datos

import usersRoute from './routes/users.routes.js';
import categoriesRoute from './routes/categories.routes.js';

const app = express();      // Instancia de Express

conexion();     // Ejecuta la conexion a la base de datos

// Habilita a la aplicacion para interpretar JSON
app.use( express.json() );

// Definiendo 1 endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de SenaStore Funcionando!' });
});

// Enlazar todas las rutas de la aplicacion
app.use( '/api/users', usersRoute );
app.use( '/api/categories', categoriesRoute );



// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});