import { dbCreateUser, dbDeleteUser, dbGetUsers, dbGetUser, dbUpdateUser } from "../services/users.services.js";

const createUser = async ( req, res ) => {
    try {
        // Extrae los datos del cuerpo de la peticion
        const inputData = req.body;
    
        // Usar el servicio para registrar
        const data = await dbCreateUser( inputData );
    
        res.json({ msg: 'Registra usuario', data: data });
    }
    catch (error) {
        console.error(error);

        res.json({ msg: 'No se pudo registrar el usuario' });
    }
}

const getUsers = async ( req, res ) => {
    try {
        const data = await dbGetUsers();
    
        res.json({
            msg: 'Lista de Usuarios',
            data: data
        });
    } 
    catch (error) {
        console.error( error );

        res.json({
            msg: 'No ha podido obtener los usuarios activos'
        });
    }
}

const deleteUser = async ( req, res ) => {
    try {
        const id = req.params.id;
    
        const data = await dbDeleteUser(id);
    
        res.json({
            msg: 'Elimina un usuario',
            data: data
        });
    } 
    catch (error) {
        console.error( error );
        
        res.json({
            msg: 'No se ha podido eliminar el usuario'
        });
    }
}

const updateUser = async ( req, res ) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
    
        const data = await dbUpdateUser( id, inputData );   // <--- Suceptible de generar una Exception
    
        res.json({
            msg: 'Usuario Actualizado',
            data: data
        });
    }
    catch( error ){
        console.error( error );

        res.json({
            msg: 'No se ha podido actualizar el usuario'
        });
    }
}

const getUser = async ( req, res ) => {
    try {
        const id = req.params.id;

        const data = await dbGetUser( id );

        res.json({
            msg: 'Obtiene un usuario',
            data: data
        });
    } 
    catch (error) {
        console.error( error );

        res.json({
            msg: 'No se pudo obtener usuario por ID'
        });
    }
}


export {
    createUser,
    getUsers,
    deleteUser,
    updateUser,
    getUser
}