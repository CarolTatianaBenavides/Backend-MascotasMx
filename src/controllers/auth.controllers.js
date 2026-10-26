import { dbGetUserByEmail } from "../services/users.services.js";

const loginUser = async ( req, res ) => {
    // Paso 1: Obtener las credenciales del usuario { email: '...', password: '...' }
    const inputData = req.body;

    // Valida si el campo email NO viene dentro de las inputData
    if( ! inputData.email ) {
        // Crea una Exception ---> Desarrollador
        // throw new Error( 'Se olvido pasar el correo en el campo email' );
        res.json({
            msg: 'Se olvido pasar el correo en el campo email'
        });
    }

    // Valida si el campo password NO viene dentro de las inputData
    if( ! inputData.password ) {
        res.json({
            msg: 'Se olvido pasar la contraseña en el campo password'
        });
    }

    // Paso 2: Verificar si usuario existe ¿email esta registrado en la BD?
    const userFound = await dbGetUserByEmail( inputData.email );

    if( ! userFound ) {
        res.json({
            msg: 'El usuario no existe. Por favor registrese'
        });
    }

    // Paso 3: Verificar si la contraseña es valida
    // TODO: Encriptar la contraseña antes de validarla (createUser, dbCreateUser)

    // Paso 4: Generar el Token (Tarjeta que presento que Autentica y Autoriza)

    // Paso 5: Responder al cliente (Enviar el Token, IMPORTANTE: No devolver el password)


    res.json({
        msg: 'Login de usuario'
    });
}


const verifyAuthenticate = ( req, res ) => {
    res.json({
        msg: 'Verifica y actualiza las credenciales del usuario'
    });
}


export {
    loginUser,
    verifyAuthenticate
}