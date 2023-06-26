/* How does the Spread Operator work? */
/* intertravamento */

/* expo init <nome do projeto> */
/* blank */

/* cd <nome do projeto> */

/* expo start */

/* npx expo start??? */

// First Example

const numbersArray = [1,2,2]

const plusThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3
}

console.log(plusThreeNumbers(...numbersArray)) // 5

// Second Example - How to concat arrays using spread operator

const firstNumbersArray = [1,2,3]
const secondNumbersArray = [4,5,6]
const thirdNumbersArray = [7,8,9]

const concatNumbersArrays = [...firstNumbersArray, ...secondNumbersArray, ...thirdNumbersArray]

console.log(concatNumbersArrays) // [1,2,3,4,5,6,7,8,9]

// Third Example - Create a Copy of an object

const obj = {
    a: 1,
    b: 1
}

const objCopy = {...obj}

console.log(objCopy);

// Fourth Example - Create a copy of objects

const obj1 = {
    a: 1,
    b: 1
}

const obj2 = {
    prop1: 1,
    prop2: 1
}

const objCopy2 = {...obj1,abc: 123, ... obj2} // Creating a copy assigning another property on the fly

console.log(objCopy2)