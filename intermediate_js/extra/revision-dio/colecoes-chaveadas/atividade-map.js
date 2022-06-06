function getAdmin(maps){
    let admins = [];
    for([key, value] of maps){
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Guilherme", "Admin");
usuarios.set("Eloisa", "User");

console.log(getAdmin(usuarios));