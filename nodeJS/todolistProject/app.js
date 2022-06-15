const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", (req, res) => {
  let today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItems;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItems;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
