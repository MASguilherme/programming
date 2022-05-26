function verificandoErro(string){
    if(!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

console.log(verificandoErro('cat'));




function tryCatch(string){
    try{
        verificandoErro(string);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("A string enviada foi " + string);
    }
}
tryCatch('8');