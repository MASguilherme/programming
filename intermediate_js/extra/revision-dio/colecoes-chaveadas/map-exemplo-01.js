const myMap = new Map();
myMap.set("comida", "arroz");
console.log(myMap);

const myMap2 = new Map();
myMap2.set("doces", "chocolate");
console.log("O doce é "+ myMap2.get("doces"));

const myMap3 = new Map();
myMap3.set("lixo", "resto de comida", "bolo azedo");
console.log("Consegui me livrar do lixo? " + myMap3.delete("lixo"));
console.log("Então me retorne undefined: " + myMap3.get("lixo"));