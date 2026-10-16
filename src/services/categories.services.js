import CategoryModel from "../models/category.model.js"

const dbCreateCategory = async ( newCategory ) => {
    return await CategoryModel.create( newCategory );  // Registrar en la BD
}

const dbGetCategories = async () => {
    return await CategoryModel.find({ status: true });   // Consultar todos las categorias registradas
}

export {
    dbCreateCategory,
    dbGetCategories
}