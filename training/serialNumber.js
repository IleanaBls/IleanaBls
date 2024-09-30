//énoncé Nous avons un tableau contenant une liste d'équipement ayant chacun un serial number
//Objectif : Extraire une liste sans doublons de tous les codes réseaux existants dans la liste
//Sachant que : Le code réseau est contenu dans le Serial Number. Il constitue les 9 premiers
//caractères de ce champ.

//Données d'entrée : 02080008000100005, 02080008000100006, 02090008000100008, 02090009000100012

// je crée une fonction qui prend en paramètre un tableau, et qui permet de retourner un tableau 
//contenant les valeurs tronquées (9 caractères)

function trunc(array){
    let newArray = []
    for(let i = 0; i < array.length; i ++){
        let code = array[i].slice(0, 9)
        newArray.push(code)
    }
    return newArray 
}

// console.log(trunc(["02080008000100005", "02080008000100006", "02090008000100008", "02090009000100012"]))

//Je crée une fonction qui compare les valeurs de mon tableau entre elles. Elle permet de retourner
//les valeurs sans doublons

function compare(array){
    let result = []
    for(let i = 0; i < array.length; i ++){
        if(!result.includes(array[i])){
            result.push(array[i])
        }
    }
    return result
}

console.log(compare(trunc(["02080008000100005", "02080008000100006", "02090008000100008", "02090009000100012"])))



