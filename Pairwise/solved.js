function pairwise(arr, arg) {
  return arr.reduce((acc, e1, i1) => {
    arr.forEach((e2, i2) => {
      if(i1 !== i2 
        && (e1 && e2) !== undefined
        && e1+e2 === arg){
        acc.push(i1+i2)
        e2 = arr[i2] = undefined
        e1 = arr[i1] = undefined
      }
    })
    return acc
  }, []).reduce((acc, value) => acc+value, 0)
}

console.log(pairwise([1, 1, 1], 2))
