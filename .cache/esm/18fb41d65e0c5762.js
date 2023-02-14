let User,CustomErrorHandler;_5e0‍.x([["default",()=>_5e0‍.o]]);_5e0‍.w("../../models",[["User",["User"],function(v){User=v}]]);_5e0‍.w("../../services",[["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}]]);


const userController = {
    async user(req, res, next) {
        try {
            const user = await User.findOne({ _id: req.user._id }).select('-password -updatedAt -__v');
            
            if (!user) {
                return next(CustomErrorHandler.notFound());
            }
            
            res.json(user);
        } catch(err) {
           return next(err);
        }
    }
};

_5e0‍.d(userController);