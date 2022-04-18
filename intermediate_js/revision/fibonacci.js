function fubbonaci(n){
    if(n === 1){
        arr = [0];
    }
    else{
        arr = [0,1];
        for(var i = 2; i < n; i++){
            debugger;
            var arrLength = arr.length;
            arr.push(arr[arrLength - 1] + arr[arrLength - 2]);
        }
    }
    return arr;
}
// quantidade de posições no array
var arr = fubbonaci(8);
console.log(arr);