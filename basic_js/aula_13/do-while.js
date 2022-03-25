// comendo fatias de pizza
fatia = 1
falta = 8 - fatia 
do{
    console.log(`Comi ${fatia} fatia da pizza, faltam ${falta} fatias.`)
    fatia++
    falta--
}while(fatia <= 8)