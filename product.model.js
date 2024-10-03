import mongoose from "mongoose";

const productSchema= mongoose.Schema({
name:{
    type:String,
    required:[true,'please enter the name']
},
quantity:{
    type:Number,
    required:[true,'please enter the quantity'],
    default:0
},
price:{
    type:Number,
    required:true,
    default:0,

},
image:{
    type:String,
    required:false
},

},{
    timestamps:true
}
)
 const Product = mongoose.model("Product",productSchema);

 export default Product;