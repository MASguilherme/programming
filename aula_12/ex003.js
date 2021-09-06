agora = new Date()
var h = agora.getHours()
console.log(`Agora são exatamente ${h.toFixed(2)} horas.`)
if(h < 12 && h > 2){
    console.log('Bom dia')
}else if(h >= 12 && h < 18){
    console.log('Boa Tarde')
}else if(h >= 18 && h <= 24 ){
    console.log('Boa noite')
}else if(h > 24){
    console.log('A hora está incorreta')
}else if( h <= 2){
    console.log('Boa noite')
}