const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bookRouter = require ('./routes/bookRouter')
const authorRouter = require ('./routes/authorRouter')
const cors = require('cors')
const port = 3000


app.use(cors())


app.use('/books', bookRouter)
app.use('/authors', authorRouter)



main().then(()=>{console.log("Database connected")}).catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://032-express-js-assignment:Te5FNzdonejMdxTg@cluster0.haebtmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})