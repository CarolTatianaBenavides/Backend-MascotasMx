import { Schema, model } from 'mongoose';

// Definir la estructura de mi documento
const CategorySchema = new Schema(
    // Definir la estructura de datos
    {
        name: {
            type: String,
            unique: true,
            minlength: 5
        },
        description: String,
        status: {
            type: Boolean,
            default: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        }
    },
    // Configuraciones de la estructura de datos
    {
        timestamps: true,    // Agrega los campos createdAt, updatedAt automaticamente (los actualiza automaticamente) 
        versionKey: false    // Elimina la propiedad de versionamiento __v del Schema
    }
);

// Definir el model a partir de la estructura del documento
const CategoryModel = model( 
    'category',     // Nombre de la colleccion donde se guardaran los documentos de tipo categoria
    CategorySchema  // Schema (estructura de datos) que se guardara en coleccion
);

// Exportamos el modelo para que pueda ser usado por los servicios
export default CategoryModel;