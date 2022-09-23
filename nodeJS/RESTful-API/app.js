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


app.get("/showArticles", (req, res)=>{
    Article.find(function(err, foundArticles){
        res.send(foundArticles);
    });
});

app.get("/articles", (req, res) =>{

    res.render("articles");
});

app.post("/articles", (req, res) =>{

    console.log(req.body.title);
    console.log(req.body.content);

    const article = new Article({
        title : req.body.title,
        content : req.body.content
    });

    article.save();

    res.redirect("/articles");
});

app.listen(3000, (req, res) =>{
    console.log("Server is running on port 3000!");
});