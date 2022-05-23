const num = {
    n1: 5,
    n2: 2
}

function soma(num1, num2){
    return this.n1 + this.n2 + num1 + num2;
}

console.log(soma.call(num, 10, 15));