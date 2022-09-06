const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// connection with mongoDB
mongoose.connect("mongodb://localhost:27017/listDB");

// Schema
const itemsSchema = {
    name: {
        type: String, required:[true, "alert('A name is required!')"]
    }
};

const Item = mongoose.model("Item", itemsSchema);

const itemsList2 = new Item({
    name: "Update a Site"
});

const itemList3 = new Item({
    name: "Delte a site"
})

const defaultItems = [itemsList2, itemList3];

// Insert Items
// Item.insertMany(defaultItems, function(err){
//     if(err){
//         return err;
//     } 
    
//     else{
//         console.log("Item was inserted successfully!");
//     }
// });


// Read
Item.find(function(err, items){
    if(err){
        console.log(err);
    }else{
        items.forEach(function(items){
            console.log(`Task: ${items.name}`);
        });
    }
});

// let items = [];
// let workItems = [];
// let weekendItems = [];

app.get("/", (req, res) =>{
    
    let day = date.getDate();

    res.render("index",{listTitle: "Today", newItems: items, currentDay: day});
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

    let day = date.getDate();

    res.render("index", {listTitle: "Work", newItems: workItems, currentDay: day});
});

app.post("/work", (req, res) =>{
    let item = req.body.newItems;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/weekend", (req,res) =>{

    let day = date.getDate();
    

    res.render("index", {listTitle: "Weekend", newItems: weekendItems, currentDay: day});
});

app.post("weekend", (req, res) =>{
    let item = req.body.newItems;
    weekendItems.push(item);
    res.redirect("/weekend");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
})