// to create a Schema we are importing mongoose
const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);//this is to create the collections we want to store in DB
//exporting the collection in the main index.js file.
module.exports=User;