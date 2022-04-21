var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextGame(){
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $(".btn").on("click",function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);

        // $(this).fadeOut().fadeIn();
        animatePress(userChosenColour);
        playSound(userChosenColour);
    });
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

nextGame();