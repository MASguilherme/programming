const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  let today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItems;
  items.push(item);
  
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
