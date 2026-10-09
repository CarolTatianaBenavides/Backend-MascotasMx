// const express = require('express');   // CommonJS
import express from 'express';           // ESModule

import usersRoute from './routes/users.routes.js';

const app = express();

// Definiendo 1 endpoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de SenaStore Funcionando!' });
});

// Enlazar todas las rutas de la aplicacion
app.use( '/api/users', usersRoute );


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});