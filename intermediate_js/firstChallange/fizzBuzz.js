var outpout = [];
count = 1;
function fizzBuzz(){
    for(var i = 0;i <= 100; i++){
        if(count % 3 === 0 && count % 5 === 0){
            outpout.push("FizzBuzz");
        }
        else if(count % 3 === 0){
            outpout.push("Fizz");
        }
        else if(count % 5 === 0){
            outpout.push('Buzz');
        }
        else{
            outpout.push(count);
        }
        count++;
    }
    console.log(outpout);
}

fizzBuzz();
