let APP_URL,mongoose;_0c5‍.x([["default",()=>_0c5‍.o]]);_0c5‍.w("../config",[["APP_URL",["APP_URL"],function(v){APP_URL=v}]]);_0c5‍.w("mongoose",[["default",["mongoose"],function(v){mongoose=v}]]);

 



const Schema = mongoose.Schema;

const productSchema = new Schema({

	name: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
	image: {
		type: String, required: true, get: (image) => {
		//http://localhost:3500/upload/1673505509049-482336746.jpg
			
			return `${APP_URL}/${image}`;
	} },


}, { timestamps: true,toJSON:{getters:true},id:false})

_0c5‍.d(mongoose.model('product',productSchema,'products'));