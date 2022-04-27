//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

superheroes.all;
supervillains.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var myHero = superheroes.random();
//=> 'Spider-Ham'

var myVilan = supervillains.random();

console.log(`Hero ${myHero} VS Vilan ${myVilan}`);