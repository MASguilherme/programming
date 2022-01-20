window.onload = function(){
    var el = document.getElementById('vanilla')
    el.innerHTML = el.innerHTML + "Guilherme."

    el.style.color = "red"
    el.style.border = "3px solid black"

    let el2 = document.querySelector('h3')

    el2.innerHTML = "Fui inserido via innerHTML."
    el2.style.color = "gray"

    let el3 = document.querySelectorAll('p')
    
    for(let i=0; i <= el3.length; i++){
        el3[i].style.background = "gold"
    }
}