// traducteur de lettre à morse

//separe les mots lettre par lettre
function getLatinCharacterList(a){
    let tableauMots = a.split("");
   	return tableauMots;

}

getLatinCharacterList("Bonjour Ileana!");

const latinToMorseDictionary = {
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
//transforme les lettres en morse
}
function translateLatinCharacter(caractere){
    return latinToMorseDictionary[caractere.toUpperCase()];
}

//utilise la premiere fonction pour appliquer la deuxieme à un texte 
function encode(texte){
    let result = [];
    let motTableau = getLatinCharacterList(texte);
    
    for (let i=0; i< motTableau.length; i++){
        result.push(translateLatinCharacter(motTableau[i]));
    }
    return result;
}

//permet le lien entre le JS et le HTML, prend l'information du HTML pour lui appliquer la fonction du JS

const message = document.querySelector("#message");
const latinToMorse = document.querySelector("#latin-to-morse");
const morseOutput = document.querySelector("#morse-output");
console.log(message)

latinToMorse.addEventListener("click", function(){
	const latinText = message.value;
	morseOutput.textContent = encode(latinText);
})




