let express,registerController,loginController,userController,refreshController,productController,tradecontroller,auth,admin;_559‍.x([["default",()=>_559‍.o]]);_559‍.w("express",[["default",["express"],function(v){express=v}]]);_559‍.w("../controllers",[["registerController",["registerController"],function(v){registerController=v}],["loginController",["loginController"],function(v){loginController=v}],["userController",["userController"],function(v){userController=v}],["refreshController",["refreshController"],function(v){refreshController=v}],["productController",["productController"],function(v){productController=v}],["tradecontroller",["tradecontroller"],function(v){tradecontroller=v}]]);_559‍.w("../middlewares",[["auth",["auth"],function(v){auth=v}],["admin",["admin"],function(v){admin=v}]]);
const router = express.Router();




router.post('/register', registerController.register);

router.post('/login', loginController.login);

router.get('/user', auth, userController.user);

router.post('/refresh', refreshController.refresh)

router.post('/logout', auth, loginController.logout)


router.post('/product', [auth, admin], productController.store)

router.put('/update/:id', [auth, admin], productController.update)

router.delete('/distroy/:id', [auth, admin], productController.distroy)

router.get('/list', productController.list)


router.get('/search/:id', productController.search)

router.post('/trades', tradecontroller.trades);








_559‍.d(router);