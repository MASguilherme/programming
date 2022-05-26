function validaArray(arr, num){
   try{
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros!");

    if(typeof arr !== 'object') throw new TypeError("Não é um object");

    if(arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
   }
   catch(e){
       if(e instaceof ReferenceError){
           console.log("Este é um reference error");    
           console.log(e.menssage);
       }else if(e instaceof TypeError){
        console.log("Este é um TypeError error");    
        console.log(e.menssage);
       }else if(e instaceof RangeError){
        console.log("Este é um RangeError error");    
        console.log(e.menssage);
       }else{
           console.log("ocorreu um tipo de erro não esperado" + e);
       }
   }

}

console.log(validaArray());