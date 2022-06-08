const express = require("express");
const app = express();


app.get("/", (req, res) =>{
   let today = new Date();

   if(today.getDay() == 6 || today.getDay() == 0 ){
       res.send("Uhuul, it's the weekend!");
   }
   else{
       res.send("boo! I have to work.");
   }
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
});