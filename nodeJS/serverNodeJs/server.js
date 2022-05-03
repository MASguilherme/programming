const express = require("express");
const req = require("express/lib/request");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.get("/contact", function(req, res){
    res.send("Send me a e-mail to guilherme@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<h1>About:</h1> My name is Guilherme <br /> I'm 21 years old <br /> I'm from Brazil <br /> Bazinga.")
});

app.get("/hobbie", function(req, res){
    res.send("<ul>Hobbies<ul><li>Coffee</li><li>Beer</li>");
});

app.listen(3000, function(){
    console.log("My server is running in port 3000!");
});


