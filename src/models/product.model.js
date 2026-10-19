import { Schema, model } from 'mongoose';

// Definir el Schema (estructura de datos) para producto
const ProductSchema = new Schema({
    // Nombre producto
    name: {
        minlength: 5,
        required: true,
        trim: true,
        type: String,
        unique: true
    },
    description: String,        // Descripcion del Producto
    // Precio del Producto
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    // Inventario del Producto
    stock: {
        type: Number,
        min: 0,
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
    // Quien registro el producto
    createdBy: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

// Definir el Modelo de datos
const ProductModel = model( 'product', ProductSchema );

// Exporto el Modelo para que esté disponible
export default ProductModel;