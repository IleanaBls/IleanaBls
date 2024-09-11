function isFizzNumber(number){
    if(number%3 == 0 || number.toString().includes('3')){
        return true
    }
    return false
}

function isBuzzNumber(number){
    if(number%5 == 0 || number.toString().includes('5')){
        return true
    }
    return false
}

function isFizzBuzzBuzzNumber(number){
    if(number%5 == 0 && number.toString().includes('5') && number.toString().includes('3')){
        return true
    }
    return false
}


function main(){
    for(let i = 1; i<=100; i++){
        let j=i;
        if(isFizzBuzzBuzzNumber(i)){
            i="FizzBuzzBuzz"
        }
         else if(isFizzNumber(i) && isBuzzNumber(i)){
            i="FizzBuzz"
        }
        else if(isFizzNumber(i)){
            i="Fizz"
        }else if(isBuzzNumber(i)){
            i="Buzz"
        }
        console.log(i)
        i=j
    }
}

// console.log(main())

module.exports = { 
    isFizzNumber,
    isBuzzNumber,
    isFizzBuzzBuzzNumber
}