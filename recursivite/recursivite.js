//exercice s'inspirant de la suite de Fibonacci

const tabNumber = [1, 2, 3, 4, 5];


//additionne tous les entiers du tableau
function sum1(n){
    
    if (n === 1) {
      return 1
    } else {
      return n + sum2(n - 1)
    }
}

// multiplie des entiers inférieurs (produit) ou égaux à un nombre donné (ex pour 3 = 1x2x3 = 6)

function factorial(n) {
  if (n === 0){
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(3))

//function pour appliquer la suite de fibonacci à un entier donné

function fibonacci(x){
  if (x < 0) {
    return -1
  
  }if (x===0){
    return 0
  
  }if (x===1){
  return 1
  }

  return fibonacci(x-1) + fibonacci(x-2)

}
  
  console.log(fibonacci(5))

