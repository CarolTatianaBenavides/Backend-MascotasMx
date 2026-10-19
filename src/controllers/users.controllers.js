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

// Controlador para listar usuarios con paginación y filtro de status
const getUsers = async ( req, res ) => {
    try {
        // Paso 1: Extraer los query parameters de la URL
        // Ejemplos:
        //   - /api/users?status=true   (usuarios activos)
        //   - /api/users?status=false  (usuarios inactivos)
        //   - /api/users?status=all    (todos los usuarios)
        //   - /api/users?page=1&limit=10&status=all
        const { page = 1, limit = 10, status = 'true' } = req.query;

        // Paso 2: Invocar el servicio de consulta enviando paginación y filtro de estado
        const data = await dbGetUsers( page, limit, status );
    
        // Paso 3: Retornar la respuesta exitosa en formato JSON con la metadata y la lista
        res.json({
            msg: 'Lista de Usuarios',
            data: data
        });
    } 
    catch (error) {
        // En caso de excepción, imprimir el error en consola para depuración en el servidor
        console.error( error );

        // Responder al cliente con un mensaje de error descriptivo
        res.json({
            msg: 'No ha podido obtener los usuarios'
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