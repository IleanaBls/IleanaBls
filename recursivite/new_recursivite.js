//Refait après quelques mois de formation
//Etape 1 

function sum1(array){
    return array.reduce((a, b) => a + b, 0);
    
}

console.log(sum1([1,2,3,4])) //Valeur attendue 10

//Correction

// function sum1(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//        result += array[i];
//     }
//     return result;
// }

//Etape 2 

function sum2(n){
  
    if(n === 1){
        return 1
    }
       
    return n + sum2(n - 1)
    

}

console.log(sum2(4))//Valeur attendue 10

//Correction

// function sum2(array, index) {
//     if (index < 0) {
//       return 0;
//     }
    
//     return sum2(array, index - 1) + array[index];
    
// }


//Etape 3 

function factorial(n){
    if(n === 1){
        return 1
    }else{
       return n * factorial(n-1) 
    }
}
console.log(factorial(4))//Valeur attendue 24

//Etape 4

function fibonacci(x){
    if(x==0){
        return 0
    }
    if(x==1){
        return 1
    }

    return fibonacci(x-1) + fibonacci(x-2)
}

console.log(fibonacci(3))//Valeur attendue 2
console.log(fibonacci(4))//Valeur attendue 3
console.log(fibonacci(0))//Valeur attendue 0
console.log(fibonacci(1))//Valeur attendue 1
console.log(fibonacci(5))//Valeur attendue 5
console.log(fibonacci(8))//Valeur attendue 21


