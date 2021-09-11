// mudar a cor do elemento artigoB ao clicar no artigoA
$(function(){

    var timeresize

    $('#preventacao').click(function(e){
        // para previnir que a ação ocorre use: e.preventDefault();
        e.preventDefault();
    })

    $(window).resize(function(){
        console.log('evento para quando precisar exibir algo ao redimensionar a tela: Riseze')

        clearTimeout(timeresize)
        timer = setTimeout(function(){
            location.href = "pg2.html"
        })
    })
})

