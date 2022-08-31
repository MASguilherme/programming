// const mongoose = require("mongoose");

// // Connection URI
// mongoose.connect("mongodb://localhost:27017/FoodDB", {useNewUrlParser: true});

// const foodSchema = new mongoose.Schema({
//   _id: Number,
//   name: String,
//   price: Number,
// });

// const Food = mongoose.model("Food", foodSchema);

// const food = new Food({
//   _id: 2,
//   name: "2Kg of Bean",
//   price: 10.99
// });

// food.save();

const mongoose = require("mongoose");

// connection
mongoose.connect("mongodb://localhost:27017/PeopleDB", {
  useNewUrlParser: true,
});

// Schema
const peopleSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String, 
    required: [true, "A name is required"]
  },
  profession: String,
  rating: {
    type: Number, min: 1, max: 10 
  }
});

// collection
const People = mongoose.model("People", peopleSchema);

// insert data

const people = new People({
  
  _id: 98,
  Profession: "Office",
  rating: 10
});

people.save();

mongoose.connection.close();

// const marcos = new People({
//   _id: 3,
//   name: "Marcos Pontes",
//   profession: "astronaut",
// });

// const vini = new People({
//   _id: 4,
//   name: "Vini Jr",
//   profession: "soccer player",
// });

// People.insertMany([marcos, vini], function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Peoples save on db")
//   }
// });

// People.find(function (err, peoples) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
    
//     peoples.forEach(function (people, i) {
//       console.log(`${i} - ${people.name}, profession: ${people.profession}` );
//     });
//   }
// });
