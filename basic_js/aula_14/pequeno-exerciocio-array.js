let num = [0,5,4,3,2,7,1,9,10]
num.push(6)

console.log(`Seu vetor contém ${num.length} posições`)

for(posicao in num){
    console.log(`Posição ${num.indexOf(num[posicao])} contém o valor ${num[posicao]}`)
}
// condição para encontrar a posição de um valor digitado em indexOf
let pos = num.indexOf(10)    
if(pos == -1){
    console.log(`Seu vetor não contém a posição, por favor adicionar.`)
}else{
    console.log(`O valor está na posição ${pos}`)
}