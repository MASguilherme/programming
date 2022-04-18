function playDices(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
   
    var randomDice = `images/dice${randomNumber1}.png`;
    var diceOne = document.querySelector(".img1");
    diceOne.setAttribute("src", randomDice);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomDice2 = `images/dice${randomNumber2}.png`;
    var diceTwo = document.querySelector(".img2");
    diceTwo.setAttribute("src", randomDice2);

    var result = document.querySelector("#title");
    if(randomNumber1 > randomNumber2){
        result.innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        result.innerHTML = "Player 2 Wins!";
    }
    else{
        result.innerHTML = "Draw...";
    }
}