function bringMin(arr){
  return arr.reduce((min, value, index) => 
    value < min.value ? {index, value} : min, {index: 0, value: arr[0]})
}

function selectionSort(array) {
  var newArr = [...array]
  return array.reduce(acc => {
    return [...acc, ...newArr.splice(bringMin(newArr).index, 1)]
  }, [])
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
