var arr = [];
var count = 1;
function fizzBuzz(number){
    for(var i = 0; i < number;i++){
        if(count % 3 === 0 && count % 5 === 0){
            arr.push('FizzBuzz!');
        }
        else if(count % 3 === 0){
            arr.push("Fizz");
        }
        else if(count % 5 === 0){
            arr.push("Buzz");
        }
        else{
            arr.push(count);
        }
        count++;
        
    }
console.log(arr);
}

fizzBuzz(15);

