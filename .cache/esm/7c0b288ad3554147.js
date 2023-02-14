let CustomErrorHandler,JwtService;_d35‍.x([["default",()=>_d35‍.o]]);_d35‍.w("../services",[["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}],["JwtService",["JwtService"],function(v){JwtService=v}]]);


const auth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized());
    }

    const token = authHeader.split(' ')[1];

    try {
        const { _id, role } = await JwtService.verify(token);
        const user = {
            _id,
            role
        }
        req.user = user;
        next();

    } catch(err) {
        return next(CustomErrorHandler.unAuthorized());
    }

}

_d35‍.d(auth);