var arrSorted

function sort(array){
  if(array.length > 0){
    const pivot = array.splice(array.length-1, 1)
    sort(array.filter(e => e < pivot))
    arrSorted.push(...pivot)
    sort(array.filter(e => e >= pivot))
  }
}

function quickSort(array) {
  arrSorted = []
  sort(array)
  return arrSorted;
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
