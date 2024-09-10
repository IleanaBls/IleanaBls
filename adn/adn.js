//Utilisation de module JS

import { log } from 'node:console';
import fs from 'node:fs'

//lecture du fichier adn.txt
const data = fs.readFileSync('adn.txt');
const adn = data.toString().split("");

//Etape 1
function cutData(arr){
    let array = [];
    for(let i = 0; i < arr.length; i+=3){
        array.push(arr.slice(i, i+3).join(""))
    }
    return array
}

const codons = (cutData(adn));
// console.log(codons)

//Etape 2

//dictionnaire de conversion : 
const conversion = {
'ATA':'I',
'ATC':'I',
'ATT':'I',
'ATG':'M',
'ACA':'T',
'ACC':'T',
'ACG':'T',
'ACT':'T',
'AAC':'N',
'AAT':'N',
'AAA':'K',
'AAG':'K',
'AGC':'S',
'AGT':'S',
'AGA':'R',
'AGG':'R',
'CTA':'L',
'CTC':'L',
'CTG':'L',
'CTT':'L',
'CCA':'P',
'CCC':'P',
'CCG':'P',
'CCT':'P',
'CAC':'H',
'CAT':'H',
'CAA':'Q',
'CAG':'Q',
'CGA':'R',
'CGC':'R',
'CGG':'R',
'CGT':'R',
'GTA':'V',
'GTC':'V',
'GTG':'V',
'GTT':'V',
'GCA':'A',
'GCC':'A',
'GCG':'A',
'GCT':'A',
'GAC':'D',
'GAT':'D',
'GAA':'E',
'GAG':'E',
'GGA':'G',
'GGC':'G',
'GGG':'G',
'GGT':'G',
'TCA':'S',
'TCC':'S',
'TCG':'S',
'TCT':'S',
'TTC':'F',
'TTT':'F',
'TTA':'L',
'TTG':'L',
'TAC':'Y',
'TAT':'Y',
'TAA':'_',
'TAG':'_',
'TGC':'C',
'TGT':'C',
'TGA':'_',
'TGG':'W',
}

function translateCodontoProteine(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let proteine = conversion[arr[i]]
        result.push(proteine)
    }
    return result.join("")
}

console.log(translateCodontoProteine(codons))


  

    
    


    


