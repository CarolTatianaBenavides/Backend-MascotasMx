// Controlador define quien hace una accion especifica
const createUser = (req, res) => {
    res.json({ msg: 'Registra usuario' });
}

const getUsers = ( req, res ) => {
    res.json({ msg: 'Registra usuario' });
}

const updateUserPatch = ( req, res ) => {
    res.json({ msg: 'Actualiza usuario (Patch)' });
}

const updateUserPut = ( req, res ) => {
    res.json({ msg: 'Actualiza usuario (Put)' });
}

const deleteUser = ( req, res ) => {
    res.json({ msg: 'Elimina un usuario' });
}


export {
    createUser,
    getUsers,
    updateUserPatch,
    updateUserPut,
    deleteUser
}