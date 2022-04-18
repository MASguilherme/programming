
function bottlesOfBear(){
    var bottles = 100;

    while(bottles >= 1)
    {
        console.log(bottles + ' bottles of beer on the wall. ' + bottles +' bottles of beer. Take 1 down, pass it around, ' + (bottles-1) + ' bottles of beer on the wal');
        bottles = bottles-1;
    }
    
}
bottlesOfBear();

