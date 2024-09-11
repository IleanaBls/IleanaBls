const { isFizzNumber, isBuzzNumber, isFizzBuzzBuzzNumber } = require('./fizzBuzz')

describe('test fizz', () => {
    it('la fonction doit retourner fizz si le nombre est un multiple de 3', () => {
        const number = 3
        const isFizz = isFizzNumber(number)
        expect(isFizz).toBe(true)
    })
    it('la fonction doit retourner fizz si le nombre contient le chiffre 3', () => {
        const number = 13
        const isFizz = isFizzNumber(number)
        expect(isFizz).toBe(true)
    })
})

describe('test buzz', () => {
    it('la fonction doit retourner buzz si le nombre est un multiple de 5', () => {
        const number = 5
        const isBuzz = isBuzzNumber(number)
        expect(isBuzz).toBe(true)
    })
    it('la fonction doit retourner buzz si le nombre contient le chiffre 5', () => {
        const number = 51
        const isBuzz = isBuzzNumber(number)
        expect(isBuzz).toBe(true)
        
    })
})

describe('test fizzbuzzbuzz', () => {
    it('la fonction doit retourner fizzbuzzbuzz si le nombre contient le chiffre 5, le chiffre 3 et est un multiple de 5',
        () => {
            const number = 35
            const isBuzz = isFizzBuzzBuzzNumber(number)
            expect(isBuzz).toBe(true)

        }
    )
})




    
    