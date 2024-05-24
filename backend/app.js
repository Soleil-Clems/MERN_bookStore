const express = require("express");
const bookRoute = require("./routes/booksRoute")
const mongoose = require('mongoose');
const config = require('./config');
const mongoDbUrl =config.mongoDbUrl
const app = express();

app.use(express.json())
app.use("/books", bookRoute)
app.get("/", (req, res, next) => {
    console.log("good thing");
    res.status(200).send("hello my route")
    next()
})

mongoose.connect(mongoDbUrl)
    .then((connect) => {
        console.log("Database connection succed")

    })
    .catch(error => console.log(error))


module.exports = app;