let dotenv;_a22‍.x([["APP_PORT",()=>APP_PORT],["DEBUG_MODE",()=>DEBUG_MODE],["DB_URL",()=>DB_URL],["JWT_SECRET",()=>JWT_SECRET],["REFRSH_SECRET",()=>REFRSH_SECRET],["APP_URL",()=>APP_URL]]);_a22‍.w("dotenv",[["default",["dotenv"],function(v){dotenv=v}]]);
dotenv.config();

       const {
    APP_PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET,
    REFRSH_SECRET,
    APP_URL
  
  
} = process.env;