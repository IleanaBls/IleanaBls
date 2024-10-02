//Given two strings, write a method to decide if one is a permutation of the other.

//Etape 1 : je classe les lettres des phrases par ordre alphabétique en retirant les espaces

function sortedString(string){
    let stringArray = string.split("")
    let newString = stringArray.sort()
    let result = []

    for(let i = 0; i < newString.length; i++){
        if(newString[i] != " "){
            result.push(newString[i])
        }
    }
    
    return result
    
   
}
console.log(sortedString("hello world"))

//Etape 2 je compare 2 tableau d'abord leur taille puis leur contenu index par index

function compareArrayOfString(array1, array2){
    if(array1.length != array2.length){
        return false
    }
    for(let i = 0; i < array1.length; i ++){
        if(array1[i] != array2[i]){
            return false
            
        }
    }
    return true
}

console.log(compareArrayOfString(["a", "b", "c"], ["a", "b", "c", "d"]))

function compareString(string1, string2){
    return compareArrayOfString(sortedString(string1), sortedString(string2))
}

console.log(compareString("bonjour les enfants", "les enfants bonjour"))//resultat attendue true
console.log(compareString("bonjour les enfants", "les enfants coucou"))//resultat attendue false

    
    




