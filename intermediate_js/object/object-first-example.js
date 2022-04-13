var houseKeeper = {
    name: "Ana",
    age: "19",
    languages: ["English","Spanish","Deutsch"]
}

houseKeeper.languages.push("Portuguese");

console.log(houseKeeper);

console.log(`Hi, my names is ${houseKeeper.name}, I am ${houseKeeper.age} old and I speaky ${houseKeeper.languages[0]}, 
${houseKeeper.languages[1]} and ${houseKeeper.languages[2]}. 
Oh, I forgot! I speaky ${houseKeeper.languages[3]} too.`);
