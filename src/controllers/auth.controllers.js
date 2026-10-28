import { verifyPassword } from "../helpers/bcrypt.helpers.js";
import { generateToken } from "../helpers/jwt.helpers.js";
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
    const isValid = verifyPassword( inputData.password, userFound.password )

    if( ! isValid ) {
        res.json({
            msg: 'El password es invalido'
        });
    }

    // Paso 4: Generar el Token (Tarjeta que presento que Autentica y Autoriza)
    const payload = {
        _id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role,
        status: userFound.status
    }

    const token = generateToken( payload );

    // Paso 5: Eliminar el campo password) del objeto
    const jsonObj = userFound.toObject();   // Convertir un BJSON a un Objeto de JavaScript

    // Eliminar propiedades no deseadas
    delete jsonObj.password;

    res.json({
        msg: 'Login de usuario',
        token: token,
        data: jsonObj
    });
}


const verifyAuthenticate = ( req, res ) => {
    const data = req.holaatodos;
    console.log( ':::::::', data );

    console.log('Soy el controlador verifyAuthenticate');

    res.json({
        msg: 'Verifica y actualiza las credenciales del usuario'
    });


    // // 4. Generar un nuevo Token (OJO: Debe tener las mismas propiedades el payload original)
    // const newPayload = {
    //     _id: userFound._id,
    //     name: userFound.name,
    //     email: userFound.email,
    //     role: userFound.role,
    //     status: userFound.status
    // }

    // const token = generateToken( newPayload );
}


export {
    loginUser,
    verifyAuthenticate
}