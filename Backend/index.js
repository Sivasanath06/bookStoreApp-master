import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

import cors from 'cors'
dotenv.config();
const app = express()
const PORT = process.env.PORT||4000;
const URI= process.env.MongoDBURI;
app.use(cors())
app.use(express.json());
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('Connected to db')
} catch (error) {
    console.log("Error :",error);
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})