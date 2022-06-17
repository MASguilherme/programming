const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", (req, res) => {
  let day = date.getDate();

  res.render("index", { listTitle: day, newItems: items });
});

app.post("/", (req, res) => {
  let newItem = req.body.newItems;

  if (req.body.listItem === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("index", { listTitle: "Work List", newItems: workItems });
});

app.post("/work", (req, res) => {
  let newItem = req.body.newItems;
  workItems.push(newItem);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about", { listTitle: "About" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
