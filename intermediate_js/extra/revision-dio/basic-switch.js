function caseId(id){
    switch(id){
        case 1:
            return "Dog";
        case 2:
            return "Cat";
    
        default:
            return "Nenhum id encontrado";
    }
    
}

console.log(caseId(1));
console.log(caseId(2));
console.log(caseId());
