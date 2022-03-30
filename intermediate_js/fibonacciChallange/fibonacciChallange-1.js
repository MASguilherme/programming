
var n = [];
var n1 = -1;
var n2 = 1;
function fibonnaci(num){
    for(var i = 0;i< num;i++){
        var result = n1 + n2;
        n1 = n2;
        n2 = result;
        n.push(result);
    }
    
}
fibonnaci(20);
console.log(n);



