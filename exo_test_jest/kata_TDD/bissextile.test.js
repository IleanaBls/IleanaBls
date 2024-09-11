const { div400, div100, div4, divis4 } = require('./bissextile.js')

describe('test 1', () => {
    it("la fonction doit vérifier que l'année est divisible par 400", () => {
        const annee = 1200
        const isBissextile = div400(annee)
        expect(isBissextile).toEqual(true) 
    })
})

describe('test 2', () => {
    it("la fonction doit vérifier que l'année est divisible par 100 et par 400", () => {
        const annee = 400
        const isBissextile2 = div100(annee)
        expect(isBissextile2).toEqual(true)
    })
})

describe('test 3', () => {
    it("la fonction doit vérifier que l'année est divisible par 4 et pas par 100", () => {
        const annee = 2008
        const isBissextile3 = div4(annee)
        expect(isBissextile3).toEqual(true)
    })
})

describe('test 4', () => {
    it("la fonction doit vérifier que l'année est divisible par 4", () => {
        const annee = 2008
        const isBissextile4 = divis4(annee)
        expect(isBissextile4).toEqual(true)
    })
})





