const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// connection
mongoose.connect("mongodb://localhost:27017/SoccerPlayerDB", {
  useNewUrlParser: true,
});

// Schema

const favoriteBall = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "A name is required!"]
    }
}); 

const soccerPlayer = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  squadNumber: {
    type: Number,
    min: 0,
    max: 100,
  },
  position: String,
  ball: String
});


// Collection
const Player = mongoose.model("Player", soccerPlayer);

const Ball = mongoose.model("Ball", favoriteBall);

// CREAT (INSERT)

// Ball Create

const nike = new Ball({
    name: "Nike"
});


// soccer players

const daniel = new Player({
  name: "Dani Alves",
  squadNumber: 2,
  position: "Defender",
});

const cr7 = new Player({
  name: "Cristiano Ronaldo",
  squadNumber: 7,
  position: "Center Foward",

});

const maguire = new Player({
    name: "Harry Maguire",
    squadNumber: 12,
    position: "Defender"
});

const messi = new Player({
    name: "Messi",
    squadNumber: 10,
    position: "Right Foward",
    ball: nike.name
});


// Player.insertMany([cr7], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(`Player was successfully inserted`);
//         mongoose.connection.close();
//     }
// });



// Ball.insertMany([nike], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(`${nike.name} ball was inserted successfuly!`);
//         mongoose.connection.close();
//     }
// });

// READ

// Player.find(function (err, players) {
//   if (err) {
//     console.log(err);
//   } else {
//     players.forEach(function (players) {
//       console.log(
//         `The soccer player ${players.name} is a squad number ${players.squadNumber} and play in the ${players.position} position`
//       );
//     });
//     mongoose.connection.close();
//   }
// });

// UPDATE

// Player.updateMany(

//     {_id: "6310c44caeb0db994ff772d3"},
//     {squadNumber: "6"},

//     function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("player information was updated!");
            
//             mongoose.connection.close();
//         }
//     }

// );

Player.updateOne(
    {name: "Cristiano Ronaldo"},
    {ball: nike.name},

    function(err){
        if(err){
            console.log(err);
        }else{
            console.log("player information was updated!");

            mongoose.connection.close();
        }
    }
);

// Player.updateOne(
//     {_id: "6310c4d4b9ef3a2c4b54611a"},
//     {squadNumber: "9"},
//     {name: "Ronaldo Fenômeno"},

//     function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("players informations was updated!");
            
//             mongoose.connection.close();
//         }
//     }

// );


// DELETE

// Player.deleteOne(
//     {_id:"6310c4bae50bff43bbce78d5"},

//     function(err){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Soccer player was deleted!");

//             mongoose.connection.close();
//         }
//     }
// );

// Player.deleteMany(
//     {name: "Cristiano Ronaldo"},

//     function(err){
//         if(err){
//             return err;
//         }
//         else{
//             console.log("Soccers players was deleted!");
//             mongoose.connection.close();
//         }
//     }
// );