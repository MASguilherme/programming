var arr = [5,9,6,8,0,1,8,10,25,100,-5];

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
    }
    
console.log(arr);
}
bubbleSort();
