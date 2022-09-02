const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let items = [];
let workItems = [];
let weekendItems = [];

app.get("/", (req, res) =>{

    res.render("index",{listTitle: "Today", newItems: items});
});

app.post("/", (req, res) => {

    let item = req.body.newItems;

    if(req.body.index === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else if(req.body.index === "Weekend"){
        weekendItems.push(item);
        res.redirect("/weekend");
    }
    else{
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", (req, res) =>{

    res.render("index", {listTitle: "Work", newItems: workItems});
});

app.post("/work", (req, res) =>{
    let item = req.body.newItems;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/weekend", (req,res) =>{

    res.render("index", {listTitle: "Weekend", newItems: weekendItems});
});

app.post("weekend", (req, res) =>{
    let item = req.body.newItems;
    weekendItems.push(item);
    res.redirect("/weekend");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
})