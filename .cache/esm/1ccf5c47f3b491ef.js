let mongoose;_f3b‍.x([["default",()=>_f3b‍.o]]);_f3b‍.w("mongoose",[["default",["mongoose"],function(v){mongoose=v}]]);
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema(
  {

    token: { type: String, unique:true },
 
  },
  { timestamps: false }
);

_f3b‍.d(mongoose.model("RefreshToken", refreshTokenSchema, "refreshTokens"));
