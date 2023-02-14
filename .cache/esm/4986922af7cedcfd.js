let mongoose;_f7c‍.x([["default",()=>_f7c‍.o]]);_f7c‍.w("mongoose",[["default",["mongoose"],function(v){mongoose=v}]]);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' },
}, { timestamps: true });

_f7c‍.d(mongoose.model('User', userSchema, 'users'));
