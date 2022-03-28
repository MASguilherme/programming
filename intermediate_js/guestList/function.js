function searchGuest(guestName){
    
    guestName = document.getElementById('inputGuest');
    guestName = guestName.value;

    var guestList = ["Angela", "Zé", "Creed"];

    var answer = document.getElementById('result');

    if(guestList.includes(guestName)){
        answer.innerHTML = "Welcome";
    }else{
        answer.innerHTML = "Not invited...";
    }
    
}
