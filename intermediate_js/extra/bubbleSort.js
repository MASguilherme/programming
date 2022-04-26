var arr = [98, 83, 51, 76, 71, 64, 21, 33];

function bubbleSort(){
    length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < (length - i); j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
        console.log(i+" = "+arr);
    }
    
}
bubbleSort();
