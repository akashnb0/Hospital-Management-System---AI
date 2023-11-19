const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    id: Number,
    username: String,
    age: Number,
    email: String,
    address: String,
    country:String,
    date:String,
    reason:String,
    doctor:String,
    existingmedical:String,
    allergy:String,
    medication:String,
    symptoms:String,
    status: String,
    history:String,
    dept:String,
    img: String,

})

const UserModel=mongoose.model("users",UserSchema)
module.exports = UserModel