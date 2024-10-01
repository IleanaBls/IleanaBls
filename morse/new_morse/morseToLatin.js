//Etape 4

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

//transforme la phrase en morse en tableau de chaînes de caratères
function getMorseCharacterList(string){
    return string.split(" ");
}

console.log(getMorseCharacterList(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))

//Traduit les caractères morse en lettre de façon individuelle
function translateMorseCharacter(morse){
    return morseToLatin[morse]
}

console.log(translateMorseCharacter('....'))


//Permet d'appliquer les 2 fonctions précédentes pour traduire des phrases. 
//Gestion des "/ qui correspondent à des espaces en lettres latines

function decode(string){
    let listMorse = getMorseCharacterList(string)
    console.log("ici :" , listMorse)
    let result = []

    for(let i = 0; i < listMorse.length; i++){
        
        if(listMorse[i] == "/"){
          let newSeparator = listMorse[i].replace("/", " ")
          result.push(newSeparator)
        }else{
            result.push(translateMorseCharacter(listMorse[i]))
        }
    }
    return result.join("")
}

console.log(decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'))