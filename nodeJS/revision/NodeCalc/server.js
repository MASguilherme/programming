const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("assets "));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) =>{
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    var result = 0;
    const conta = [req.body.soma, req.body.sub, req.body.mult, req.body.div, req.body.rest];

    if(conta[0] == "on"){
        result = n1 + n2;
        
    }else if(conta[1] == "on"){
        result = n1 - n2;
    }else if(conta[2] == "on"){
        result = n1 * n2;
    }else if(conta[3] == "on"){
        result = n1 / n2;
    }else if(conta[4] == "on"){
        result = n1 % n2;
    }else{
        res.send("Nenhum tipo de conta foi selecionado...");
    }

    res.send("Result: "+result+ " e o Saulo é um zé oreia");

});

app.listen(3000, function(){
    console.log("server is running on port 3000!");
});