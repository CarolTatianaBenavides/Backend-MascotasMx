// Servicio se habla con la base datos. 
// Estas funciones realizaran las consultas a la base de datos

import UserModel from "../models/user.model.js";

// TODO: Conectar el Modelo de Usuarios con la Base de datos

const dbCreateUser = async ( newUser ) => {
    return await UserModel.create(newUser);     // Promesa resuelta (await)
}

const dbGetUsers = () => {}

const dbUpdateUser = () => {}

const dbDeleteUser = () => {}


export {
    dbCreateUser,
    dbGetUsers,
    dbUpdateUser,
    dbDeleteUser
}