var names = ['Angela','Ben','Jenny','Micheal','Chloe'];

function buyLunch(){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    console.log(randomPerson+' is going buy the lunch!');
}
buyLunch();

// function buyLunch(){
//     var names = ['Angela','Ben','Jenny','Micheal','Chloe'];
//     names.lenght = Math.random();
//     names.lenght = Math.floor(names.lenght * 5);
//     var numberOfpeople = names.lenght;

//     if(numberOfpeople === 0){
//         console.log(names[0]+' is going buy lunch today!');
//     }
//     if(numberOfpeople === 1){
//         console.log(names[1]+' is going buy lunch today!');
//     }
//     if(numberOfpeople === 2){
//         console.log(names[2]+' is going buy lunch today!');
//     }
//     if(numberOfpeople === 3){
//         console.log(names[3]+' is going buy lunch today!');
//     }
//     if(numberOfpeople === 4){
//         console.log(names[4]+' is going buy lunch today!');
//     }
    
// }
// buyLunch();
