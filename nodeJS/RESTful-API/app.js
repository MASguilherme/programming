const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/WikiDB");

// Schema
const articleSchema = new mongoose.Schema({
    title: String, 
    content: String,
});

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", (req, res) =>{
    Article.find(function(err, foundArticles){
        res.send(foundArticles);
    });
});

app.listen(3000, (req, res) =>{
    console.log("Server is running on port 3000!");
});