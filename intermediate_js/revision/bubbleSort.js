var arr = [10,56,98,15,20,87];
function bubbleSort(){

    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < (arr.length - 1);j++){
            if(arr[j] > arr[j +1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
console.log(arr);
}

bubbleSort();
