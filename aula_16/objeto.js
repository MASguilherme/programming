let amigo = {nome:'José', sexo:'masculino', idade: 45, peso: 45.87, 
engordar(kilos=0){
    console.log('Engordou')
    this.peso += kilos  
}}  


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)