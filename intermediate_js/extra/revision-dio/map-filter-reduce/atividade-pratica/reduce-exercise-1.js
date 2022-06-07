function addArrays(arr){

    return arr.reduce((prev, current) => prev + current);   
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(`The sum of the array is: ${addArrays(numbers)}`);