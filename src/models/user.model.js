import { Schema, model } from "mongoose";

// Parte 1: Definir la estructura de datos de mi Documento
const UserSchema = new Schema(
    // Definición de los campos del documento
    {
        name: {
            type: String,           // Tipo dato
            required: true,         // Regla: Es Obligatorio
            trim: true              // Modificador: 
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        role: {
            type: String,
            enum: ['ADMIN', 'SELLER', 'CUSTOMER'],
            default: 'CUSTOMER'
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    // Opciones del esquema
    {
        timestamps: true      // Crea automaticamente createdAt, updatedAt
    }
);

// Parte 2: Definir el modelo. Dicho modelo esta atado al nombre de documento
const UserModel = model(
    'User',             // Nombre de la colección (pluraliza automáticamente)
    UserSchema          // Nombre del esquema que define la estructura de los documentos de la colección
);


export default UserModel;


