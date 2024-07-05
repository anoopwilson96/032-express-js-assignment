require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bookRouter = require ('./routes/bookRouter')
const authorRouter = require ('./routes/authorRouter')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const cors = require('cors')
const port = 3000


app.use(cors({
    credentials: true,
    origin:true
  }
))
app.use(express.json())
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