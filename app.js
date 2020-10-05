const express = require('express');
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./back-end/config/db");
require('dotenv').config();

app = express();

// Initiate Mongo Server
InitiateMongoServer();

// Port
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
});

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: 'API working'});
});


app.set('view engine', 'ejs');

// Fetching data from back-end controller
app.use('/api/', require("./back-end/routes/homeRoutes"));

