var n = Math.floor(Math.random() * 6 + 1);

var dicesOne = document.querySelector('#diceOne');
function playDices(){
    for(var i = 0; i <= 1000; i++){
        if(n === 1){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice1.png">`
        }
        if(n === 2){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice2.png">`
        }
        if(n === 3){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice3.png">`
        }
        if(n === 4){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice4.png">`
        }
        if(n === 5){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice5.png">`
        }
        if(n === 6){
            dicesOne.innerHTML = `<img id="diceOne"class="img1" src="images/dice6.png">`
        }
    }
}