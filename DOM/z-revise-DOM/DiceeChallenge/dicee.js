
$("#play").on("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var randomDice = `images/dice${randomNumber1}.png`;
  var diceOne = $(".img1");
  diceOne.attr("src", randomDice);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var randomDice2 = `images/dice${randomNumber2}.png`;
  var diceTwo = $(".img2");
  diceTwo.attr("src", randomDice2);

  var result = $("#title");
  if (randomNumber1 > randomNumber2) {
    result.text("Player 1 Wins!");
  } else if (randomNumber2 > randomNumber1) {
    result.text("Player 2 Wins!");
  } else {
    result.text("Draw...");
  }
});
