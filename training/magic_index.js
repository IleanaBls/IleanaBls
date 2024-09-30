//Enoncé : A magic index in an array A[ 1.•.n-1] is defined to be an index such that A[ i] = i. 
//Given a sorted array of distinct integers, write a method to find a magic index, if one exists, 
//in array A.

//Créer une function qui prend en paramètre un tableau et retourne l'index magic s'il existe à l'intérieur
//du tableau

function findTheMagicI(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === i){
            return "l'index magique est : " + array[i]
        }
    }
    return "pas d'index magique existant"
}

console.log(findTheMagicI([1, 2, 3, 4, 4]))