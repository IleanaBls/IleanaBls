// traducteur de morse à lettre
const morseToLatinDictionary = {
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

  function getMorseCharacterList(a){
    let tableauMorse = a.split(' ');
    //console.log(tableauMorse);
    return tableauMorse;
  }
  //console.log(getMorseCharacterList(".... .-. ..."))

  function translateMorseCharacter(morse){
    return morseToLatinDictionary[morse.toUpperCase()];

  }
    //console.log(translateMorseCharacter('....'));
  

function decode(texte){
    let result = [];
    let morseTableau = getMorseCharacterList(texte);
    
    for (let i=0; i< morseTableau.length; i++){
        result.push(translateMorseCharacter(morseTableau[i]));
    }
    return result;
}
    let mot = decode("... .- .-.. ..- - / .-.. . ... / .- -- .. ...");
    let newMot = mot.join(" ");
    //console.log(newMot);

    const morseTranslate = document.querySelector("#morseTranslate");
    const morseToLatin = document.querySelector("#morse-to-latin");
    const latinOutput = document.querySelector("#latin-output");
    console.log(morseTranslate)
    
    morseToLatin.addEventListener("click", function(){
      const morseText = morseTranslate.value;
      latinOutput.textContent = decode(morseText);
    })

    