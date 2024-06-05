//Nouvelle version refaite après quelques mois de formation

let rangeMin = document.querySelector("#rangeMin");
let rangeMax = document.querySelector("#rangeMax");
let tentatives = document.querySelector("#try");
let message = document.querySelector("#message");

let valeurRangeMin = 0;
let valeurRangeMax = 50;
let nbTentatives = 0;
nbTentatives = 0;

function numberToGuess(){
    let number = Math.floor((Math.random() * 10))
    return number;
}

// console.log(askAnumber());

function didIwin(givenNumber, guessNumber){
    if (givenNumber == guessNumber){
        message.innerHTML = '<h2>BRAVO TU AS GAGNE</h2> <button id = "replay">Rejouer</button>' 
        let replay = document.querySelector("#replay")
        replay.addEventListener('click', () => {
            window.location = "/";
        })
        return true;
    }
    
    if(givenNumber < guessNumber){
        message.innerHTML = "Le nombre à deviner est plus grand";
        
        return false ;
    
    }else{
        message.innerHTML = "Le nombre à deviner est plus petit";
        
        return false ;
    }
}

// console.log(didIwin(givenNumber));

function gamePlay(){
    rangeMin.innerHTML = valeurRangeMin + "<p> < </p>";
    rangeMax.innerHTML = "<p> > </p> "+ valeurRangeMax;
    tentatives.innerHTML = nbTentatives + "/10";
    let guessNumber = numberToGuess();
    let givenNumber = document.querySelector("#number");
    let btn = document.querySelector("#btn");
    btn.addEventListener('click', function() {
        let number = parseInt(givenNumber.value);
        nbTentatives+=1;
        tentatives.innerHTML = nbTentatives;
        didIwin(number, guessNumber);
        
        if (number < guessNumber && number > valeurRangeMin){
            valeurRangeMin = number;
            rangeMin.innerHTML = valeurRangeMin + "<p> < </p>";
        }
        else if(number > guessNumber && number < valeurRangeMax){
            valeurRangeMax = number;
            rangeMax.innerHTML = "<p> > </p> "+ valeurRangeMax;
            
        }

        if (nbTentatives > 10){
            let btnremove = document.getElementById('btn');
            btnremove.remove();
            message.innerHTML = '<h2>TU AS PERDU<h/2> <button id = "replay">rejouer</button>'
            let replay = document.querySelector("#replay")
        replay.addEventListener('click', () => {
            window.location = "/";
        })
        }
    })
    return;
}

gamePlay()