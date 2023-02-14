let DEBUG_MODE,ValidationError,CustomErrorHandler;_f7c‍.x([["default",()=>_f7c‍.o]]);_f7c‍.w("../config",[["DEBUG_MODE",["DEBUG_MODE"],function(v){DEBUG_MODE=v}]]);_f7c‍.w("joi",[["ValidationError",["ValidationError"],function(v){ValidationError=v}]]);_f7c‍.w("../services/CustomErrorHandler",[["default",["CustomErrorHandler"],function(v){CustomErrorHandler=v}]]);



const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let data = {
        message: 'Internal server error',
        ...(DEBUG_MODE === 'true' && { originalError: err.message })
    }

    if (err instanceof ValidationError) {
        statusCode = 422;
        data = {
            message: err.message
        }
    }

    if (err instanceof CustomErrorHandler) {
        statusCode = err.status;
        data = {
            message: err.message
        }
    }

    return res.status(statusCode).json(data);
}

_f7c‍.d(errorHandler);