const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + "/date.js");
const _ = require('lodash');

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

const itemsList1 = new Item({
    name: "Update a Site"
});

const itemList2 = new Item({
    name: "Delte a site"
});

const defaultItems = [itemsList1, itemList2];

// Custom URL
const listSchema = {
    name: String,
    items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);

app.get("/", (req, res) =>{
    
    let day = date.getDate();
    
    // Read
    Item.find(function(err, item){
        if(err){
            console.log(err);
        }else{
                res.render("index", {listTitle: "Today", newItems: item, currentDay: day});
        }
    });
    
});


app.get("/:customListName",(req, res) =>{

    let day = date.getDate();

    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function(err, foundList){

        if(!err){
            if(!foundList){
                const customList = new List({
                    name: customListName,
                    items:defaultItems
                });
                customList.save();
                res.redirect("/" + customListName);
            }else{
                res.render("index", {listTitle: foundList.name, newItems: foundList.items, currentDay: day });
            }
        }
    });


});

app.post("/", (req, res) => {

    const itemName = req.body.newItems;
    const listName = req.body.index;

    const item = new Item({
        name: itemName
    });
    if(listName == "Today"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();

            res.redirect("/" + listName);
        });
    }

});

app.post("/delete", (req, res)=>{''
    const checkedItemId = req.body.checkDel;
    const listName = req.body.listName;

    if(listName === "Today"){
        Item.findByIdAndRemove(checkedItemId, (err) =>{
            if(err){
                console.log(err);
            }else{
                console.log("Item was successfully removed!");
                res.redirect("/");
            }
        });
    }else{
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }
    
});


app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
})