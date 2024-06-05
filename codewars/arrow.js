let number = [1,2,3,4,5]

function impairNumber(array){
    let tableau = []
    
   for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
        tableau.push(array[i])   
    }
   }
   return tableau
  }
  console.log(impairNumber(number))
