const authorizationMiddleware = ( req, res, next ) => {

    console.log( 'Hola Soy el Middleware de Autorizacion' );
    next();
}


export {
    authorizationMiddleware
}