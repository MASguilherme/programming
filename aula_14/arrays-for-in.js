// for(let exemplo in exemplo) funciona apenas para arrays e objetos

let num = [1,2,3,4,5]

for(let pos /*var de posição*/ in num){
    console.log(`O valor da posição é ${num[pos]}`)
}
console.log(`Seu vetor tem um total de ${num.length} posições.`)