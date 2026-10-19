import UserModel from "../models/user.model.js";

const dbCreateUser = async ( newUser ) => {
    return await UserModel.create( newUser );  // Registrar en la BD
}

const dbGetUsers = async () => {
    return await UserModel.find({ status: true });   // Consultar todos los usuarios activos registrados
}

const dbDeleteUser = async ( id ) => {
    // return await UserModel.findByIdAndDelete( id );
    return await UserModel.findOneAndDelete({ _id: id });
}

const dbUpdateUser = async ( id, userUpdated ) => {
    return await UserModel.findOneAndUpdate(
        { _id: id },            // Objeto de consulta para buscar el documento que deseamos actualizar
        userUpdated,            // El objeto con los datos del Documento que deseamos actualizar
        { new: true }           // Configuracion para que retorne el documento actualizado
    );
}

const dbGetUser = async ( id ) => {
    // return await UserModel.findById( id );       // Obtiene un usuario por su ID
    return await UserModel.findOne({ _id: id });
}


export {
    dbCreateUser,
    dbGetUsers,
    dbDeleteUser,
    dbUpdateUser,
    dbGetUser
}