function insert(elem, arr){
  var inserted = arr.find((e, i) => {
    if(elem <= e){
      arr.splice(i, 0, elem)
      return true
    }
  })
  if(!inserted){
    arr.push(elem)
  }
}

function insertionSort(array) {
  var arr = [...array.splice(0, 1)]
  array.forEach(elem => {
    insert(elem, arr)
  })
  return arr;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
