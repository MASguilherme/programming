// essa função, calcula a quantidade de passos que uma pessoa precisa dar para atravessar a rua.
// onde "var partida é incio do trajeto" / "var destino é local de destino."
function AtravessarRua(){
    var partida = 5;
    var destino = 500;
    var passos = 0;
    
    // var passos = 1;
    // var totalAndado; // passos * destino - partida;
    // if(passos <= destino){
    //     totalAndado = (passos * destino) - partida;
    // }
    for(var i = 1; i < destino;i++){
        passos++;
    }

    console.log(`Foram necessários ${passos} passos para chegar 
                do ponto de partida em ${partida}, para chegar até o destino
                que estava há ${destino} passos.`);
    
}
AtravessarRua();