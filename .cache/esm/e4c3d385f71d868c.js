let Joi,User,RefreshToken,CustomErrorHandler,bcrypt,JwtService,REFRSH_SECRET;_f71‍.x([["default",()=>_f71‍.o]]);_f71‍.w("joi",[["default",["Joi"],function(v){Joi=v}]]);_f71‍.w("../../models",[["User",["User"],function(v){User=v}],["RefreshToken",["RefreshToken"],function(v){RefreshToken=v}]]);_f71‍.w("../../services",[["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}],["JwtService",["JwtService"],function(v){JwtService=v}]]);_f71‍.w("bcrypt",[["default",["bcrypt"],function(v){bcrypt=v}]]);_f71‍.w("../../config",[["REFRSH_SECRET",["REFRSH_SECRET"],function(v){REFRSH_SECRET=v}]]);







const loginController = {
    async login(req, res, next) {
        // Validation
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });
        const { error } = loginSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return next(CustomErrorHandler.wrongCredentials("credentials failed "));
            }
            // compare the password
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                return next(CustomErrorHandler.wrongCredentials("username & password not valid"));
            }

            // Toekn
            const access_token = JwtService.sign({ _id: user._id, role: user.role });

          const   refresh_token = JwtService.sign({ _id: user._id, role: user.role },'1y', REFRSH_SECRET);

   
        // database whitelist
            
             await RefreshToken.create({token:refresh_token})
           
            res.json({ access_token,refresh_token});

        } catch(err) {
            return next(err);
        }

    },

    async logout(req, res, next) {

        
         //Validation
        
        const refreshSchema = Joi.object({
            
            refresh_token:Joi.string().required(),
        })

        const { error } = refreshSchema.validate(req.body);

        if (error) {
            return next(error)
        }
        
        
        try {

            await RefreshToken.deleteOne({token:req.body.refresh_token})


            
        } catch (err) {
            return next(new Error('Something went wrong in the database'))
        }

        res.json({status:1})
    
}
    
    
    
    
    
    

    
    
    

    
   
        
    
    
    
};


_f71‍.d(loginController);