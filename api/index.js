const express = require('express')
const app = express()

const PORT = 5000
app.use(express.json())
app.use('/auth',require('./routes/auth'))

app.listen(PORT,() => {
    console.log(`Server Started on PORT : ${PORT}`);
})