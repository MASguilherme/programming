const express = require("express");
const req = require("express/lib/request");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    res.send("Thank you for send!");
});

app.listen(3000, function(){
    console.log("My calculator is ready to be building.");
});