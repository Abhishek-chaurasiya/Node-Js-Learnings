require('dotenv').config()
//async errors
require('express-async-errors')

const express = require('express')
const app = express();

//database
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler')

// middleware
app.use(express.json());

//routes

app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">product route</a>')
})

app.use('/api/v1/products',productsRouter)
//products route


app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const PORT = process.env.PORT || 3000;

const start = async ()=>{
    try{
       // connectDb
       await connectDB(process.env.MONGO_URI)
       app.listen(PORT,()=>{
        console.log( `listening on port ${PORT}`)
       })
    } catch(error){
        console.log(error)
    }
}

start();

