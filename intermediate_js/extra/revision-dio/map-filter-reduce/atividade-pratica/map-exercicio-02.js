function mapWithoutThis(arr){

    return arr.map((item) => item  * 2);
}

const numbers = [2, 4, 6, 8, 10, 12, 14, 15];

console.log( `Array numbers multiplied by 2: ${mapWithoutThis(numbers)}`);