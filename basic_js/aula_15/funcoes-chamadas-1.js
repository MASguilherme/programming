function parimpar(n){
    if(n % 2 == 0){
    return `${n} é par`
    }else{
        return `${n} é impar`
    }
}

let res = parimpar(101)

console.log(res)