var arr = [10,9,8,7,6,-1,100,3,2,1];

function selectioSort() {
  debugger;
  var length = arr.length;
  var valueMin = 0;

  for(var i = 0; i < (length - 1);i++){
    valueMin = i; 
    for( var j = i + 1; j < length;j++){
      if(arr[j] < arr[valueMin]){
        valueMin = j;
      }
    }
    if(i != valueMin){
      var aux = arr[i];
      arr[i] = arr[valueMin];
      arr[valueMin] = aux;
    
    }
  }
  console.log(arr);
}
selectioSort();
