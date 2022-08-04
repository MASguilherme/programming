const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
    let day = date.getDate();

    res.render("list", { listTitle : day, newItem: items });
});

app.post("/", (req, res) =>{
    let item = req.body.newItem;

    items.push(item);
    res.redirect("/");

});




app.listen(3000, () =>{

    console.log("Server is running on port 3000!");
});

