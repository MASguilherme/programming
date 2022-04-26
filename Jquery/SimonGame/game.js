var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keydown(function(){

    if(!started){
        $("level-title").text("Level "+level);
        nextGame();
        started = true;
    }
});

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // $(this).fadeOut().fadeIn();
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success!");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextGame();
            },1000);
        }
    }
    else{
        playSound("wrong");

        $("#level-title").text("Game Over. Press enter to restart");

        $("#body").addClass("game-over");
        setTimeout(function(){
            $("#body").removeClass("game-over");
        },500);

            gameOver();
    }
}

function nextGame(){

    userClickedPattern = [];

    level++; 

    $("#level-title").text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function gameOver(){
    level = 0;
    gamePattern = [];
    started = 0;
}
