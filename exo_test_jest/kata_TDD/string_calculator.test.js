const {GetSum}= require ('./string_calculator');

describe("test", () => {
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("")
        expect(sum.add()).toBe(0)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum1= new GetSum(12)
        expect(sum1.add()).toBe(false)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum2= new GetSum("1")
        expect(sum2.add()).toBe(1)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum3= new GetSum("1,3")
        expect(sum3.add()).toBe(4)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("1,2,3,4,5,6,7,8,9")
        expect(sum.add()).toBe(45)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("//;/n1;2;3")
        expect(sum.add()).toBe(6)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("1,-2,6")
        expect(sum.add()).toBe("Les nombres négatifs comme: -2 ne sont pas permis chef!")
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("1, 1001")
        expect(sum.add()).toBe(1)
    })
    it('la fonction  retourne la somme des chiffres contenus daans le string en entrée', ()=>{
        const sum= new GetSum("//[***]\n1***2***3")
        expect(sum.add()).toBe(6)
    })
})




       
        
        