const mongoose = require("mongoose");

// Connection URI
mongoose.connect("mongodb://localhost:27017/FoodDB", {useNewUrlParser: true});

const foodSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: Number,
});


const Food = mongoose.model("Food", foodSchema);

const food = new Food({
  _id: 2,
  name: "2Kg of Bean",
  price: 10.99
});

food.save();

