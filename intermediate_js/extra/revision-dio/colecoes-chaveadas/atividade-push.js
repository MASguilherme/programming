const array = [40,40,50,50,80,80,90,90,100,100,500,500,1000,1000];
// faça o array retornar valores unicos;

function meuArray(arr){
    const set = new Set(arr);

    return [...set];
}

console.log(meuArray(array));