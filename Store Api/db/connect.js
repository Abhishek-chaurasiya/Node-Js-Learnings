const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDB = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log('connected bro'))
    .catch((err)=>console.log(err));
}


module.exports = connectDB;