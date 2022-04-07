
var dicesOne = document.querySelector('#diceOne');
var dicesTwo = document.querySelector('#diceTwo');
function playDices(){
    var n = Math.floor(Math.random() * 6 + 1);
        if(n === 1){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
            <p>Player 1</p>
            <img class="img1" src="images/dice1.png" alt="dice">
          </div>`;

        }
        if(n === 2){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
        <p>Player 1</p>
        <img class="img1" src="images/dice2.png" alt="dice">
      </div>`;
        }
        if(n === 3){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
        <p>Player 1</p>
        <img class="img1" src="images/dice3.png" alt="dice">
      </div>`;
        }
        if(n === 4){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
        <p>Player 1</p>
        <img class="img1" src="images/dice4.png" alt="dice">
      </div>`;
        }
        if(n === 5){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
        <p>Player 1</p>
        <img class="img1" src="images/dice5.png" alt="dice">
      </div>`;
        }
        if(n === 6){
            dicesOne.innerHTML = `<div class="dice" id="diceOne">
        <p>Player 1</p>
        <img class="img1" src="images/dice6.png" alt="dice">
      </div>`;
        }
    var n2 = Math.floor(Math.random() * 6 + 1);
    if(n2 === 1){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice1.png" alt="dice">
      </div>`;
    }
    if(n2 === 2){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice2.png" alt="dice">
      </div>`;
    }
    if(n2 === 3){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice3.png" alt="dice">
      </div>`;
    }
    if(n2 === 4){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice4.png" alt="dice">
      </div>`;
    }
    if(n2 === 5){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice5.png" alt="dice">
      </div>`;
    }
    if(n2 === 6){
        dicesTwo.innerHTML = ` <div class="dice" id="diceTwo">
        <p>Player 2</p>
        <img class="img2" src="images/dice6.png" alt="dice">
      </div>`;
    }

    var titleResult = document.querySelector('#title');
    if(n > n2){
        titleResult.innerHTML = 'Player 1 Wins!';
    }
    else if(n2 > n){
        titleResult.innerHTML = 'Player 2 Wins!';
    }
    else{
        titleResult.innerHTML = 'Draw...';
    }
}