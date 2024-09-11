//myFunction retourne un tableau inversé

function myFunction(arr){
    const reversedArray = []
    for (let i of arr){
        reversedArray.unshift(i)
    }
    return reversedArray
}

module.exports = {myFunction}

