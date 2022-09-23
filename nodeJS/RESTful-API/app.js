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


app.route("/articles")
.get((req, res) =>{

    res.render("articles");
})
.post((req, res) =>{

    const article = new Article({
        title : req.body.title,
        content : req.body.content
    });

    article.save();

    res.redirect("/articles");
})
.delete((req, res)=>{
    Article.deleteMany(function(err){
        if(err){
            console.log(err);
        }else{
            console.log("The articles was deleted!");
        }
    });
});

app.route("/articles/:articleTitle")
.get((req, res) =>{
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }else{
            res.send("No Articles was found.");
        }
    });
});


app.listen(3000, (req, res) =>{
    console.log("Server is running on port 3000!");
});