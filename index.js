
const express = require('express')
const app = express()
const bookRouter = require ('./routes/bookRouter')
const authorRouter = require ('./routes/authorRouter')
const cors = require('cors')
const port = 3000


app.use(cors())


app.use('/books', bookRouter)
app.use('/authors', authorRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})