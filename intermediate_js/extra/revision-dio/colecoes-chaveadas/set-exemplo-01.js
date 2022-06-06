const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);
console.log("Existe algum valor dentro do meu mySet? " + mySet.has(1,2,3));

mySet.delete(3);
console.log(mySet);