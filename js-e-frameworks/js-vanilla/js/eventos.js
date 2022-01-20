function bemVindo(){
    let el = document.getElementById('text')
    el.innerHTML = "Seja bem-vindo!"

    let m = document.getElementById('message')
    m.innerHTML = "<h2 onmouseover='viaJs()'>Fui chamado via Inner HTML pelo JS.</h2>"

}

function viaJs(){
    let mJs = document.getElementById('messageJs')
    mJs.innerHTML = "<h3>Você passou o mouse na frase de cima e eu apareci.</h3>"
}