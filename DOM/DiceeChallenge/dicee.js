function playDices(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var diceRandomNumber = `images/dice${randomNumber1}.png`;
    // var imgOne = document.querySelectorAll("img")[0];
    var imgOne = document.querySelector(".img1");
    imgOne.setAttribute("src", diceRandomNumber);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var diceRandomNumber2 = `images/dice${randomNumber2}.png`;
    // var imgTwo = document.querySelectorAll("img")[1];
    var imgTwo = document.querySelector(".img2");
    imgTwo.setAttribute("src", diceRandomNumber2);

    var titleResult = document.querySelector("#title");
    if(randomNumber1 > randomNumber2){
        titleResult.innerHTML = "Player 1 Wins!";

    }
    else if(randomNumber2 > randomNumber1){
        titleResult.innerHTML = "Player 2 Wins!";
    }
    else{
        titleResult.innerHTML = "Draw...";
    }
    
    
}