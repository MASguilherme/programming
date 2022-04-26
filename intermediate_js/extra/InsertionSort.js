var arr =  [99, 88, 66, 77, 3, 2, 1, 22];

function insertionSort(){
    let atual;
    for(let i = 1; i < arr.length; i++){
        let j = i - 1;
        atual = arr[i];
        while(j >= 0 && atual < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = atual;
        console.log(i+" = "+arr);
    }

}
insertionSort();