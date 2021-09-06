function somarse(n1=0,n2=0){
    if(n1 + n2 >= 1){
        // caso o número seja positivo
        return `A soma de n1 + n2 é ${n1+n2}`
    }else if(n1 + n2 < 0){
        // caso o número seja negativo
        return `A soma de n1 + n2 é ${n1+n2}. Um número negativo.`
    }else{
        // caso a soma seja igual a zero
    return `A soma de n1 + n2 é ${n1+n2}.`
    }
}

let res = somarse(80,0)
console.log(res)