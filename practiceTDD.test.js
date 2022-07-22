import capitalize from "./capitalize.js";
import reverseStr from "./reverse.js";
import ceasarsCipher from "./ceasars.js";
import calculator from "./calculator.js";
import analyzeArray from "./analyzeArray.js";

test('capital letters', () => {
    expect(capitalize('hello world')).toBe('HELLO WORLD');
}) 

test('reverse string', () => {
    expect(reverseStr('dogger')).toBe('reggod');
})

test('perform either add, subtract, multiply, divide on 2 numbers and return the correct value', ()=> {
    expect(calculator.add(10,20)).toEqual(30);
    expect(calculator.subtract(20, 10)).toEqual(10);
    expect(calculator.multiply(5,5)).toEqual(25);
    expect(calculator.divide(45, 9)).toEqual(5);
})

test('ceasars cipher takes a string and adds the shift factor before returning new string', () => {
    expect(ceasarsCipher('Hello-All!', 2)).toBe('Jgnnq-Cnn!');
})

test('to take an array and to return an object with keys equal to the following: average value, max value, min value and array length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})