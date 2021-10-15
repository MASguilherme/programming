$(function(){

 $.ajax({
     url:'conteudo.html'
     //method:'POST',
     
 }).done(function(data){
     $('#container').append(data)
 })

})


