function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    // var hora = 7
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`

    if(hora >= 0 &&  hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpeg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.jpeg'
        document.body.style.background = '#515154'
    }

}
