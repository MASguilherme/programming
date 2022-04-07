var arr = [8,6,5,10,12];

function selectioSort(){
    var length = arr.length;
    var valueMin = arr[0];
    for(var i = 0; i < length; i++){
        if(arr[i] < valueMin){
            valueMin = arr[i];
        }
    }
    console.log(valueMin);
}
selectioSort();