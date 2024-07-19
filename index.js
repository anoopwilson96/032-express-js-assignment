require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const bookRouter = require ('./routes/bookRouter')
const authorRouter = require ('./routes/authorRouter')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const cors = require('cors')
const port = 3000

//middleware cors() should be on TOP ALWAYS
app.use(cors({
    credentials: true,  //to exchange cookies
    origin:'https://032-book-store-assignment.vercel.app/'       //set path or address(www.facebook.com etc.) as security.
     } ))             //Only from that path is allowed

//middleware to take body from all request 
app.use(express.json())  //in future we can take body of a request by (req.body)

//middleware to get cookies from request for localhost:3000/auth/verify
app.use(cookieParser()) // cookies from request  are taken as (req.cookies)

app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.use('/users',userRouter)
app.use('/auth',authRouter)



main().then(()=>{console.log("Connected")}).catch(err => console.log(err));
async function main() {
await mongoose.connect(process.env.MDB_URL);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
