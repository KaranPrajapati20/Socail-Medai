const express = require('express');
const app = express();
const cors = require('cors');
require('./db/connect');
const userRoutes = require('./routes/route')
const  PORT = 3001
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home  Page")
})


app.use('/api/v1/user', userRoutes)
app.use('/api/v1/post', userRoutes)


app.listen(PORT, (req, res) => {
    console.log(`Port is running on ${PORT}`)
})