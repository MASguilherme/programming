function mediaArray(n){
    n = arr.length;
    var soma = 0;
    for(i = 0; i < n; i++){
        soma += arr[i];
    }
    return soma / n;
}
var arr = [9,3,3,9];
var media = mediaArray(arr);
console.log(media);