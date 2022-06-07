function  filterEvenNumbers(arr){

    return arr.filter((num) => num % 2 === 0);
}
function filterOddNumbers(arr){
    return arr.filter((num) => num % 2 !== 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`The even numbers are: ${filterEvenNumbers(numbers)}`);
console.log(`The odd numbers are: ${filterOddNumbers(numbers)}`);

