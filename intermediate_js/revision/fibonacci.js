function fibonacci(n){

    if(n === 1){
        arr = [0];
    }
    else{
        arr = [0,1,1];
        for(var i = 3; i < n; i++){ 
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]); // arr[2] + arr[1]
        }
    }

    return arr;
}

var arr = fibonacci(4);
console.log(arr);