function bubbleSort(array){
  var sortedArray = {}
  array.forEach(e => {
    sortedArray[e] = sortedArray[e] ? [...sortedArray[e], e] : [e]
  })
  return Object.values(sortedArray)
                .reduce((acc, value) => acc.concat(value), [])
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
