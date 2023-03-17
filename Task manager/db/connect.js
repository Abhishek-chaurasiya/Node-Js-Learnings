const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://Abhishek:IUJkUHvkSgtghBdm@nodeexpressprojects.nkwmgtu.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
const connectDB = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log('connected bro'))
    .catch((err)=>console.log(err));
}


module.exports = connectDB;