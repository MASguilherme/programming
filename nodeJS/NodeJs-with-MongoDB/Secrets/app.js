require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "Our little secret.",
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/userDB');

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
},
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({googleId: profile.id}, function(err, user){
            return cb(err, user);
        });
    }
));

app.route("/")
.get((req, res) =>{
    res.render("home");
});

app.route("/secrets")
.get((req, res) =>{
    
    if(req.isAuthenticated()){
        res.render("secrets");
    }else{
        res.redirect("/login")
    }
});

app.route("/register")
.get((req, res) =>{
    res.render('register');
})
.post((req, res) =>{

    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }else{
            passport.authenticate('local')(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });

     // with bcrypt
    // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //     const newUser = new User({
    //         email: req.body.username,
    //         password: hash
    //      });
    
    //      newUser.save((err) =>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             {
    //                 res.render('secrets');
    //             }
    //         }
    //      });
    // });


});

app.route("/login")
.get((req, res) =>{
    res.render("login");
}).post((req, res) =>{

    const user = new User({
         username: req.body.username,
         password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });




    // with bcrypt
    // User.findOne({email: username}, function(err, foundUser){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         if(foundUser){
    //             bcrypt.compare(password, hash, function(err, result){
    //                 if(result === true){
    //                     res.render('secrets');
    //                 }
    //             });
    //         }else{
    //             res.render('home');
    //         }
    //     }
    // });
});

app.route("/logout")
.get((req, res) =>{
    req.logout(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
});

app.listen(3000, (req, res) =>{

    console.log("server is running on port 3000!");
});