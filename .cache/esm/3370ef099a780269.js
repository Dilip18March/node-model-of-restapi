let User,CustomErrorHandler;_9a7‍.x([["default",()=>_9a7‍.o]]);_9a7‍.w("../models",[["User",["User"],function(v){User=v}]]);_9a7‍.w("../services",[["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}]]);


const admin = async(req, res, next) => {
	
	try {

		const user = await User.findOne({ _id: req.user._id })

	
		
		if (user.role === 'admin') {

			next()
			

		}

		else {

			return next(CustomErrorHandler.unAuthorized('user is not admin'))
			
		}
		
	} catch (err) {

		return next(CustomErrorHandler.serverError('Internal server error'));
		
	}

	
		
}
	
_9a7‍.d(admin);
	
