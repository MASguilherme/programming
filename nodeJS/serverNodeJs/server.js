const express = require("express");
const req = require("express/lib/request");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(3000, function(){
    console.log("My server is running in port 3000!");
});

