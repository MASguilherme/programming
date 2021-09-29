$(function(){

    let b = $('.box')

    b.eq(0).append('<h4>Título adicionado com Append na posição 0</h4>')

    b.eq(1).append('<h4>Título adicionado com Append na posição 1</h4>')

    b.eq(2).append('<h4>Título adicionado com Append na posição 2</h4>')

    let conteudo = $('<h3>Meu conteúdo sendo alterado por CSS no AppendTo</h3>').appendTo(b)
    conteudo.css('color','red')

    let conteudo2 = $('<h3>Meu conteúdo sendo alterado por CSS no PrependTo</h3>').prependTo(b)
    conteudo2.css('color','green')

    let depois = 'Meu conteúdo sendo implementado com After após a box'
    b.after(depois)
   
    let antes = 'Meu conteúdo sendo implementado com Before antes da box'
    b.before(antes)
    
    let depois_insert = '<p>Meu conteúdo sendo implementado com insertAfter após a box. Nele consigo usar Css.</p>'
    $(depois_insert).insertAfter($(b)).css('color','blue')

    let antes_insert = '<p>Meu conteúdo sendo implementado com insertBefore antes da box. Nele consigo usar Css.</p>'
    $(antes_insert).insertBefore($(b)).css('text-decoration','italic')




})