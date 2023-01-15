const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const ejs = require("ejs") /** here*/
const app = express()


/** app.use("/", userRoutes)    /** here*/
app.use(express.static("public/img"));
app.use(express.static("public/css"));

app.use(bodyParser.json());
app.use(cors());
/*app.all('*', function(req, res) {
    res.send("This route doesn't exist")
    }); */


app.get('/', function(req, res) {
    res.render("index.ejs")
    });

app.get('/recettes', function(req, res) {
    res.render("table.ejs")
    });

app.get('/home', function(req, res) {
        res.render("index.ejs")
        });

app.get('/about', function(req, res) {
        res.render("about.ejs")
        });


app.listen(3005, () => {
     console.log("Server is Running")
     })