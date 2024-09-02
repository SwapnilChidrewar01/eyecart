const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const cors = require('cors');
const auth = require('./Route/AuthRouter');
const productauth = require("./Route/ProductRouter")
const connect = require("./model/db")
const Path = require('path')
PORT = process.env.PORT;

const PUBLIC_DIR = "build"



// app.use(bodyparser);
app.use(express.json())
app.use(cors());
app.use(express.static(Path.join(__dirname, PUBLIC_DIR)))
app.use('/auth', auth);
app.use('/products', productauth);
app.use("*", (req, res) => {
    res.sendFile(Path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    connect();

    console.log(`DATABASE CONNECTED ${PORT}`)
})

