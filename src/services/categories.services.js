import CategoryModel from "../models/category.model.js"

const dbCreateCategory = async ( newCategory ) => {
    return await CategoryModel.create( newCategory );  // Registrar en la BD
}

export {
    dbCreateCategory
}