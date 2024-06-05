const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]


function FindIntersection(arr){
    const tableau = []
    const tableau1 = arr[0].split(",").map(Number)
    const tableau2 = arr[1].split(",").map(Number)
    for(let i = 0 ; i < tableau1.length ; i++){
        for(let j = 0 ; j < tableau2.length ; j++) {
            if (tableau1[i]===tableau2[j]) {
                tableau.push(tableau1[i])
            }
         }
    }
    return tableau.join()
    
} 
console.log(FindIntersection(strArr))








