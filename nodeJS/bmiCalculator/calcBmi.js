const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var nHeight = req.body.height;
    var nWeight = req.body.weight;

    var result = nWeight / (nHeight * nHeight);

    res.send("Your Bmi is: "+result);
});

app.listen(3000, function(){
    console.log("Sever is running on port 3000.");
});