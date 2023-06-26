/* How does the destructuritazion work? */

/* That my initial object called "pessoa" */

let pessoa = {
    name: 'Elton',
    age: 26
}   

/* Usually, when u want to take some property from the object, you code like that...
 */

console.log(pessoa.name);

/* There's nothing doing like that, but there are other ways to get the same result. */

/* Here down, we are going to get the same result, but using desctruturing */

const { name } = pessoa

console.log(name)

/* For the age now */

const { age } = pessoa

console.log(age)

/* Now you're going to learn how to change the name of the property */

/* That's how we must make if we want to change the property "age" to "idade" */

const {age: idade} = pessoa

console.log(idade)

console.log(pessoa)

/* OBS: IT WILL NOT CHANGE THE ORIGINAL OBJECT "PESSOA", IT ONLY WILL "CREATE A COPY" FROM PESSOA'S AGE AND NAME IT LIKE "IDADE" */

/* There are a few "problems" by using desctrurign assignment in JS */

let coloracao;

let carro = {
    cor: 'azul',
    tipo: 'conversível',
    marca: 'BMW',
}

/* ERROR
------> const {cor: coloracao} = carro <-------

// SyntaxError: Identifier 'coloracao' has already been declared 
*/

/* As can u see, if you try to change a property's name to a name which is already declared, you will come across this SyntaxError. If you want to fix that you must follow these rules */

let inches;

let television = {
    backColoration : 'black',
    inch: 32,
    price: 2500
};

/* YOU MUST NOT FORGET THIS SEMICOLON (;), IF YOU DO, IT WILL RETURN ANOTHER ERROR */

({inch: inches} = television)

console.log(inches)

/* Array Destructuring Assignment */

const fruits = ['banana', 'pera', 'uva']

/* IF you want to get the element "banana" from the array, you usually must code like this */

// -> const banana = fruits[0]

// -> console.log(banana)

/* Now, using destructuring */

let [ , b, p ] = fruits // disregarding the first element 'banana' 

/* The first element from the array fruits ('banana') is being assigned to the first index from the destructuring, in that case is a clear local, the second element from fruits ('pera') is being assigned to the variable (b) and the third element ('uva') is being assigned to variable (p)*/

console.log(b,p)

/* Rest Operator */

/* Let's think about a case that I want to assign the first element from an array to a variable and all the rest of the array be assigned in only one variable
*/

let pc = ['motherboard', 'central process unit', 'graphics process unit', 'cooler', 'fans']

const [ mb, cpu, gpu, ...rest ] = pc

console.log(mb, cpu, gpu, rest)

/* It can work with any other word instead of rest */

const [ mob, cpUnit, gpUnit, ...restOfTheComputer] = pc

console.log(restOfTheComputer)

/*  */

function blender(fruits) {
    console.log(fruits)
}

const myFruits = {
    banana: 'banana',
    pear: 'pear',
}

blender(myFruits) 

function blender1({pear}){
    console.log(pear)
}

blender1(myFruits)

function blender2([firstOne]){
    console.log(firstOne)
}

blender2(['banana', 'uva'])

function blender3([firstOne, ...rest]){
    console.log(firstOne, rest)
}

blender3(['banana','uva','pera', 'maçã'])

function blender4({ name, ...rest}){
    console.log(rest)
}

blender4({name: 'Elton', age: 34})

/* If you are dealing with objects, there's no disregarding property, like this.

function blender({name,,..rest}) <-

*/

/* Finally, see this */

function blender5([firstLetter, ...otherLetters]){
    console.log(firstLetter, otherLetters)
}

blender5('banana')