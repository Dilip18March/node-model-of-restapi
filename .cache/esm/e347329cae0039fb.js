let express,APP_PORT,DB_URL,errorHandler,routes,mongoose,path;_ae0‍.w("express",[["default",["express"],function(v){express=v}]]);_ae0‍.w("./config",[["APP_PORT",["APP_PORT"],function(v){APP_PORT=v}],["DB_URL",["DB_URL"],function(v){DB_URL=v}]]);_ae0‍.w("./middlewares",[["errorHandler",["errorHandler"],function(v){errorHandler=v}]]);_ae0‍.w("./routes",[["default",["routes"],function(v){routes=v}]]);_ae0‍.w("mongoose",[["default",["mongoose"],function(v){mongoose=v}]]);_ae0‍.w("path",[["default",["path"],function(v){path=v}]]);





const app = express();







mongoose.set('useCreateIndex', true);

// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', _ae0‍.g.console.error.bind(_ae0‍.g.console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});


global.appRoot = path.resolve(__dirname);

app.use(express.urlencoded({extended:false}))


app.use(express.json());
app.use('/api', routes);
app.use('/upload', express.static('upload'))









app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
