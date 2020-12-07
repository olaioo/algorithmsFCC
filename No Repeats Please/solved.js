var resultPermutation

function recursion(rest, acc){
  if(rest.length > 0){
    for(var i=0; i<rest.length; i++){
      var aux = [...rest]
      var head = aux.splice(i,1)[0]
      if(head !== acc[acc.length-1]){
        recursion(aux, [...acc, head])
      }
    }
  }else{
    resultPermutation.push(acc)
  }
}

function permAlone(str) {
  resultPermutation = []
  for(var i=0; i<str.length; i++){
      var aux = [...str]
      var head = aux.splice(i,1)[0]
      recursion(aux, [head])
  }
  return resultPermutation.length
}

console.log(permAlone("aaabb"))
