var arr = [43, 45, 203, 356, 32, 53746, 351, 59];
function bubbleSort(arr) {
  var i, j;
  var len = arr.length;
  var swapped = false;

  for(i =0; i < len; i++){
    swapped = false;
    for(j = 0; j < len; j++){
      if(arr[j] > arr[j + 1]){
        var aux = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = aux;
        swapped = true;
      }
    }
    if (!swapped) break; 
  }
  console.log(arr);
}
bubbleSort(arr);
