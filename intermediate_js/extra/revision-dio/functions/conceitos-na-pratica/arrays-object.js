const user = {
   id:12,
   nickName: "gsouza",
   fullName: {
       firstName: "Guilherme",
       lastName: "Souza"
   }
};

function userId({id, }){

    return id;
}
function nick({nickName}){
    return nickName;
}


function getFullName({fullName:{firstName:first, lastName:last}}){

        return `${first} ${last}`;
    }
console.log(`Usuário com id de número ${userId(user)} e nickname ${nick(user)} se chama: ${getFullName(user)}. Seja bem-vindo.`);

