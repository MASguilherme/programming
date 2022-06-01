const meuObj = {
    a: 1,
    b:2
}

const novoObj = Object.create(meuObj);

novoObj.b = 5;

console.log(novoObj.b + meuObj.b);