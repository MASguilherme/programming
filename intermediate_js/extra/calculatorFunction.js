function add(n1,n2){
    return n1 + n2;
}

function multply(n1,n2){
    return n1 * n2;
}

function division(n1,n2){
    return n1 / n2;
}

function minor(n1,n2){
    return n1 - n2;    
}

function rest(n1,n2){
    return n1 % n2;
}

function calculator(n1,n2,operator){
    return operator(n1,n2);
}
debugger;
var result = calculator(3,3,add);
console.log(result);