import { dbCreateUser } from "../services/users.services.js";

// Controlador define quien hace una accion especifica
const createUser = async (req, res) => {
    // Obtenemos el usuario desde el cuerpo de la peticion (request)
    const user = req.body;

    // Conecta con el servicio para crear un usuario en la base de datos
    const newUser = await dbCreateUser(user);     // Llega como una Promesa (Promise) y se resuelve con await

    // Respuesta al cliente
    res.json({ msg: 'Registra usuario', user: newUser });
}

const getUsers = ( req, res ) => {
    res.json({ msg: 'Registra usuario' });
}

const updateUserPatch = ( req, res ) => {
    res.json({ msg: 'Actualiza usuario (Patch)' });
}

const updateUserPut = ( req, res ) => {
    res.json({ msg: 'Actualiza usuario (Put)' });
}

const deleteUser = ( req, res ) => {
    res.json({ msg: 'Elimina un usuario' });
}


export {
    createUser,
    getUsers,
    updateUserPatch,
    updateUserPut,
    deleteUser
}