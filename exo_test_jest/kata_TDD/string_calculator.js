class GetSum {
    constructor(string){
        this.string=string
    }
    add (){
        if(typeof this.string !== 'string'){
            return false
        }
        if(this.string===''){
            return 0
        }
        if(this.string[0]==="/" && this.string[1]=="/"){
            let sum=0;
            let negatives=[];
            if(this.string[2]=="["){
               
                const index= this.string.indexOf("]")
                let delimiter = this.string.substring(3,index)
                const tab1 =this.string.substring(index+2).split(delimiter)
                for(let i = 0; i < tab1.length; i++){
                    if(parseInt(tab1[i])<0){
                        negatives.push(parseInt(tab1[i]))
                    }
                    if(parseInt(tab1[i])>1000){
                        tab1[i]="0";
                    }
                    sum += parseInt(tab1[i])   
                }
                if(negatives.length!==0){
                    return "Les nombres négatifs comme: " + (negatives.join(",")) + " ne sont pas permis chef! "
                }
                return sum
            }
            
            let delimiter = this.string[2]
            const tab1 = this.string.substring(5).split(delimiter)
            for(let i = 0; i < tab1.length; i++){
                if(parseInt(tab1[i])<0){
                    negatives.push(parseInt(tab1[i]))
                }
                if(parseInt(tab1[i])>1000){
                    tab1[i]="0";
                }
                sum += parseInt(tab1[i])   
            }
            if(negatives.length!==0){
                return "Les nombres négatifs comme: " + (negatives.join(",")) + " ne sont pas permis chef! "
            }
            return sum
        }
        const tab= this.string.replaceAll('\n',',').split(',');
        console.log(tab)
        let sum=0;
        let negatives=[];
        for(let i=0; i<tab.length; i++){
            if(parseInt(tab[i])<0){
                negatives.push(parseInt(tab[i]))
            }
            if(parseInt(tab[i])>1000){
                tab[i]="0";
            }
            sum+=parseInt(tab[i])
        }
        if(negatives.length!==0){
            return "Les nombres négatifs comme: " + (negatives.join(",")) + " ne sont pas permis chef!"
        }
        if(isNaN(sum)){
            return "entrée non valide"
        }
        return sum
    }
    
}

// console.log( "1\n2\n5,3".replace('\n',','))
const add1 = new GetSum("-1,2\n3")
// console.log(add1)
console.log(add1.add())
module.exports={
    GetSum
}
