agora = new Date()
var dSem = agora.getDay()

switch(dSem){
    case 0:
        console.log('Hoje é Domingo')
    break
    case 1: 
        console.log('Hoje é Segunda')
    break
    case 2:
        console.log('Hoje é Terça')
    break
    case 3:
        console.log('Hoje é Quarta')
    break
    case 4:
        console.log('Hoje é Qunita')
    break
    case 5:
        console.log('Hoje é Sexta')
    break
    case 6: 
        console.log('Hoje é Sábado')
    break
    default:
        console.log('Nenhum dia da semana encontrado')
    break
}