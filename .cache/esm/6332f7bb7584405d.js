let Joi,User,RefreshToken,bcrypt,JwtService,CustomErrorHandler,REFRSH_SECRET;_758‍.x([["default",()=>_758‍.o]]);_758‍.w("joi",[["default",["Joi"],function(v){Joi=v}]]);_758‍.w("../../models",[["User",["User"],function(v){User=v}],["RefreshToken",["RefreshToken"],function(v){RefreshToken=v}]]);_758‍.w("bcrypt",[["default",["bcrypt"],function(v){bcrypt=v}]]);_758‍.w("../../services",[["JwtService",["JwtService"],function(v){JwtService=v}],["CustomErrorHandler",["CustomErrorHandler"],function(v){CustomErrorHandler=v}]]);_758‍.w("../../config",[["REFRSH_SECRET",["REFRSH_SECRET"],function(v){REFRSH_SECRET=v}]]);









const registerController = {
  async register(req, res, next) {
    // CHECKLIST
    // [ ] validate the request
    // [ ] authorise the request
    // [ ] check if user is in the database already
    // [ ] prepare model
    // [ ] store in database
    // [ ] generate jwt token
    // [ ] send response

    // Validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    // check if user is in the database already
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken.")
        );
      }
    } catch (err) {
      return next(err);
    }
    const { name, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // prepare the model

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    let access_token, refresh_token;

    

    try {
      const result = await user.save();
      _758‍.g.console.log(result);

      // Token
      access_token = JwtService.sign({ _id: result._id, role: result.role });

      refresh_token = JwtService.sign({ _id: result._id, role: result.role },'1y', REFRSH_SECRET);

      // database whitelist

      await RefreshToken.create({token:refresh_token})




    } catch (err) {
      return next(err);
    }

    res.json({ access_token ,refresh_token});
  },
};

_758‍.d(registerController);
