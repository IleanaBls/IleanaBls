//Refait après plusieurs mois de formation

//Etape 1 transforme une phrase en tableau de chaîne de caractère

function getLatinCharacterList(string){
    return string.split("");
}

console.log(getLatinCharacterList("Hello World"))

//Etape 2 Traduit individuellement les lettres en caractères morses

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(letter){
    return latinToMorse[letter]
}

console.log(translateLatinCharacter("A"));

//Etape 3 Utilisation des deux fonctions précédentes pour traduire une phrase en morse
//Gestion des espaces qui deviennent des / en morse

function encode(string){
    let listChar = getLatinCharacterList(string.toUpperCase())
    console.log(listChar)
    let result = []

    for(let i = 0; i < listChar.length; i++){
        
        if(listChar[i] == " "){
            let newSeparator = listChar[i].replace(" ", "/")
            result.push(newSeparator)
        }else{
			result.push(translateLatinCharacter(listChar[i]))
		}
    }
    return result.join(" ")
}
console.log(encode('hello world'))

//Etape 4 voir fichier morseToLatin


