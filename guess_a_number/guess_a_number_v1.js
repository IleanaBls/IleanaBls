//première version réalisée dans les premières semaines de formation


function player1 (){
    let givenNumber = Number(prompt("Entre un nombre entre 0 à 50 :"))

    
    return givenNumber
}
//Demande un nombre à joueur 1

function player2 (){
    let givenNumber2 = Number(prompt("Devine le nombre :"))

    return givenNumber2
}

//Demande de deviner le nombre de joeur 1 à joueur 2

function didIwin(number1, number2){
     let result = true;
    if (number1 === number2) {
        alert("Bravo")
        return true
     } else {
        alert("try again")
       
    return false
     
}
}
// Teste si le nombre donné par joueur 1 est égal à joueur 2



function gamePlay() {
    let askNumber = false
    let number = player1()
     while (!askNumber){
        let secondplayer = player2()
        askNumber = didIwin(number, secondplayer)
     }


    
    }
    //appelle les fonctions précédentes 



gamePlay()