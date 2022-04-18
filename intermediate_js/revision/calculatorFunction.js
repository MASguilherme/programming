function soma(n1,n2){
    return n1 + n2;
}
function mult(n1, n2){
    return n1 * n2;
}
function calculator(n1, n2, operator){
    return operator(n1, n2);
}

var result = calculator(2, 2, mult);
console.log(result);