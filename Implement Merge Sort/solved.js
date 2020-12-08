function merge(a, b){
  var c = []
  while (a.length>0 && b.length>0){
    if(a[0] > b[0]){
      c.push(...b.splice(0,1))
    }else{
      c.push(...a.splice(0,1))
    }
  }
  while(a.length>0){
    c.push(...a.splice(0, 1))
  }
  while(b.length>0){
    c.push(...b.splice(0, 1))
  }
  return c
}

function mergeSort(array) {
  if(array.length === 1){
    return array
  }
  var l1 = mergeSort(array.slice(0,array.length/2))
  var l2 = mergeSort(array.slice(array.length/2))
  return merge(l1, l2);
}

console.log(mergeSort([1,3,5,2,4]))
