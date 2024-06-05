
//En cours d'adaptation avec la partie HTML, le but initial était de réaliser un jeu s'inspirant du mastermind
//permet de definir si le jeu est en cours
let gamestate = true;

const validColor = ["violet", "rouge", "rose", "bleu", "vert", "orange", "jaune", "marron"];
let index1 = Math.floor(Math.random() * validColor.length);
let index2 = Math.floor(Math.random() * validColor.length);
let index3 = Math.floor(Math.random() * validColor.length);
let index4 = Math.floor(Math.random() * validColor.length);
let combinationSecret = [validColor[index1], validColor[index2], validColor[index3], validColor[index4]]

let essai = 0;
console.log(combinationSecret)


function isCorrect(tabColor){
    //passe à false si une erreur est detectée
    for (let i = 0; i < tabColor.length; i++){
        let result = validColor.includes(tabColor[i])
    
        if(result === false){
        return false
        }
    }
    return true
}
 
function isFoundCombination(tabColor){
    let output = [0, 0];
    
    for(let i = 0; i < 4; i++){
    //Si la réponse est égale à la correction on incrémente le nombre de couleur au bon endroit de 1 output[O]
        if (combinationSecret[i] === tabColor[i]){
            output[0]++
        }
    //Si la reponse est correcte mais pas au bon endroit
        if(combinationSecret.includes(tabColor[i])){
            output[1]++
        }
    }
    //permet de corriger les bug si on a plusieur fois la même couleur dans la combi secrète
    output[1] = output[1] - output[0]
    return output
}

function game(){
    
    while(gamestate === true){
        let askColor = prompt("choisis 4 couleurs");
        let tabColor = askColor.split(" ");
        if(isCorrect(tabColor)){
            let result = isFoundCombination(tabColor)
            //si 4 couleurs justes
            if (result[0] === 4){
                alert("Bravo tu as gagné !!!!")
                gamestate = false
            }else{
                alert(result)
            }
        }
        if(essai === 12){
            alert("Tu as perdu")
            gamestate = false
        }
    }
}


game();









