let arr = [1, 2, 3, 5, 6];

// forEach

// var newNumbers = [];

// arr.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// Map
const newNumbers = arr.map(function (x) {
  return x * 2;
});

// console.log(newNumbers);

// Filter - Create a new array by keeping the times that return true.

let arrFilter = [1, 20, 30, 5, 6];
const filterNumbers = arrFilter.filter(function (x) {
  return x > 10;
});

// console.log(filterNumbers);

// Reduce - Accumulate a value by doind somenthing to each item in an array
let arrReduce = [20, 20, 20, 20, 20];
// const reduceNumbers = arrReduce.reduce(function (accumulator, currentNumber) {
//   // console.log("accumulator "+accumulator);
//   // console.log("currentNumber "+currentNumber);

//   return accumulator + currentNumber;
// });

const reduceNumbers = arrReduce.reduce((accumulator, currentNumber) => accumulator + currentNumber);

console.log(reduceNumbers);

// Find - find the first item that matches from an array
let arrFind = [18, 25, 74, 10, 0];
const findNumber = arrFind.find((foundNumber) => {
  return foundNumber >= 19;
});
// console.log(findNumber);

// FindIndex - find the index of  the first item that matches

let arrFindIndex = [18, 25, 74, 10, 0];
const indexNumber = arrFindIndex.findIndex(index => index > 10);

// console.log(indexNumber);
