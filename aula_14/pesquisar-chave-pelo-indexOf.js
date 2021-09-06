let num = [1,2,0]

for(let pos in num){
    console.log(`valor no vetor: ${num[pos]}`)
}

console.log(`o valor ${num[0]} está na posição ${num.indexOf(1)}`)

console.log(` você mandou pesquisar o valor 4, mas ele não existe no seu vetor, 
            por isso informamos ${num.indexOf(4)}`)