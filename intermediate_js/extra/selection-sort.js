var arr = [8, 5, 6, 1, 3, 10, 1];

function selectioSort() {
  var length = arr.length;
  for (var j = 0; j < (length - 1); j++) {

    var valueMin = j;

    for (var i = j; i < (length - 1); i++) {

      if (arr[i] < arr[valueMin]) {
        arr[valueMin] = arr[i];

        if (arr[j] > arr[valueMin]) {

          var aux = arr[j];
          arr[j] = arr[valueMin];
          arr[valueMin] = aux;
        }
      }
    }
  }
  console.log(arr);
}
selectioSort();
