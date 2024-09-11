const { myFunction } = require("./index")

describe('Introduction to automated tests', () => {
    it('myFunction should return a reversed Array', () => {
        //GIVEN
        const array = [1,2,3]

        //WHEN
        const reversedArray = myFunction(array)

        //THEN
        expect(reversedArray).toEqual([3,2,1]) 
    })

    it('myFunction should return a reversed Array with complex items', () => {
        //GIVEN
        const array = [1,2,3,false,"abc",{message: "coucou"}]

        //WHEN
        const reversedArray = myFunction(array)

        //THEN
        expect(reversedArray).toEqual([{message: "coucou"},"abc",false, 3,2,1]) 
    })
})