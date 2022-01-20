


let resu =  document.getElementById('resultado')
function cont(){
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.cont){
            sessionStorage.cont = Number(sessionStorage.cont) + 1
        } else{
            sessionStorage.cont = 1   
        }
        resu.innerHTML = "Você clicou no botão "+sessionStorage.cont+" vezes."
    }else{
        resu.innerHTML = "Desculpe, seu navegador não é compatível com o Storage!"
    }
}


window.onload = function(){

    if(typeof(Storage) !== "undefined"){
        inicio()
    }else{
        alert('Seu navegador não é compatível com o Storage!')
    }
}

    function inicio(){
        if(localStorage.getItem("nome") !== null){
            alert("Olá "+localStorage.nome+"! Seja Bem vindo de Volta!")
        }
        else{
            alert('Bem-vindo ao nosso site!')
            localStorage.nome = "Guilherme"
        }
}