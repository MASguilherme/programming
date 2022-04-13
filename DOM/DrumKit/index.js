var drumLength = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumLength; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        this.style.color = '#fff';

});

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();