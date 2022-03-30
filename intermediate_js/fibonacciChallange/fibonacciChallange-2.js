function fubonacciChallange(n){
    if(n === 1){
        output = [0];
    }
    else{
        output = [0,1];
        for(var i = 2; i < n; i++){
             output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output;
}
var output = fubonacciChallange(2);
console.log(output);