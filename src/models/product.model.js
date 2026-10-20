import { Schema, model } from 'mongoose';

// Definir el Schema (estructura de datos) para producto
const ProductSchema = new Schema({
    // Nombre producto
    name: {
        minlength: [ 5, 'El nombre del producto debe tener al menos 5 caracteres' ],    //  Regla
        required: [ true, 'El nombre del producto es obligatorio' ],                    //  Regla
        trim: true,         //  Transformacion
        type: String,
        unique: [ true, 'El nombre de este producto ya esta registrado' ]        // Regla
    },
    description: String,        // Descripcion del Producto
    // Precio del Producto
    price: {
        type: Number,
        min: [ 0, 'El precio no puede ser negativo' ],
        default: 0
    },
    // Inventario del Producto
    stock: {
        type: Number,
        min: [ 0, 'El inventario no puede ser negativo' ],
        default: 1
    },
    // Disponibilidad o estado
    state: {
        type: String,
        enum: [ 
            'disponible',   // Producto registrado disponible para la venta
            'en garantia',  // Producto devuelto a espera de garantia
            'entregado',    // Producto llega a las manos del comprador 
            'en transito'   // Producto que sale de inventario
        ],
        default: 'disponible'  
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: [ true, 'El ID de la categoria es obligatorio' ]
    },
    // Quien registro el producto
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [ true, 'El ID del usuario que registra es obligatorio' ]
    }
},{
    timestamps: true,
    versionKey: false
});

// Definir el Modelo de datos
const ProductModel = model( 'product', ProductSchema );

// Exporto el Modelo para que esté disponible
export default ProductModel;