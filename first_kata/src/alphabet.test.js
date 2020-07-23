// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

import AlphabetReplace from './alphabet.js'

describe('AlphabetReplace', () => {

    let word 
    
    test('output to be a number', () => {

        word = new AlphabetReplace("a")
        expect(word.convert("a")).toEqual("1")
    })

    test('input of 2 letters to return 2 numbers', () => {
        word = new AlphabetReplace("a a")
        expect(word.convert("a a")).toEqual("1 1")
    })


    test('b to 2', () => {
       word = new AlphabetReplace("b")
       expect(word.convert("b")).toEqual("2")
    })

    test('c to 3', () => {
        word = new AlphabetReplace("c")
        expect(word.convert("c")).toEqual("3")
     })
});