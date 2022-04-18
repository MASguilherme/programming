function playDices(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
   
    var randomDice = `images/dice${randomNumber1}.png`;
    var diceOne = document.querySelector(".img1");
    diceOne.setAttribute("src", randomDice);
}