var drumLength = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumLength; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert("i got clicked");
});

}