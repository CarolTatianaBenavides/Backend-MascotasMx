import bcrypt from 'bcrypt';

const generatePassword = ( originalPassword ) => {
    // Generar un cadena aleatoria N veces
    const salt = bcrypt.genSaltSync( 9 ); 

    // Mezclando y encriptado el salt con contrasenia original
    const hashPassword = bcrypt.hashSync(
        originalPassword,   // 123456789
        salt                // Cadena aleatoria
    );     

    return hashPassword;
}

const verifyPassword = ( originalPassword, hashPassword ) => {
    return bcrypt.compareSync( 
        originalPassword,   // 123456789
        hashPassword        // contrasenia encriptada que viene de la base de datos
    );
}


export {
    generatePassword,
    verifyPassword
}