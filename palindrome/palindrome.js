//Déterminer si une date est un palindrome 


function isValidMonth(date){
    const array = date.split("/");
    const jourFin = [31,28,31,30,31,30,31,31,30,31,30,31];
   if ((array[2] % 4 === 0 && array[2] % 100 !=0) ||
        array[2] % 400 === 0){
            jourFin[1] = 29;
        }
   if (array.length != 3 || 
        array[1] > 12 || 
        array[0] > jourFin[array[1]-1] || 
        array[0] < 1 || 
        array[1] < 1|| 
        array[2] < 999 || 
        array[2] > 9999 ){
        return false
    }else{
        return true
    }
}

console.log(isValidMonth("29/02/2024"))

function palindrome(date){
    let newDate = date.split("/").join("");
    const reverseDate = newDate.split("").reverse().join("")
    if(reverseDate == newDate){
        return true
    }
    return false
}
console.log(palindrome("11/02/2011"))





 
