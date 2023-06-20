/* IF Ternário */

let num = 11

let res=num%2

if (res == 0){
    console.log("Par")
}else{
    console.log("Ímpar")
}
// 
let num1 = 10

let res1 = (num1%2 ? "Par" : "Ímpar")

console.log(res1)

// It returns "ímpar" because 0 means False and 1 means True

// If we want to this operation returns True, we have to do this:

res1 = (!(num1%2) ? "Par" : "Ímpar")

console.log(res1)

let num2 = 10
let num3 = 5

let res2 = (num2 > num3 ? "Verdadeiro" : "Falso")

console.log(res2)

let st = 'A'

let res4 = (st == 'A' ? "Ativo" : "Inativo")

// The ternary conditional sintax is composed like this:
// condition ? the return if the condition is true : the return if the condition is false

// this is the sintax if you have more than 2 conditions

const subscribers = 200000;

const premioYoutube = 
subscribers >= 50000000 ? "Prêmio Rubi" 
: subscribers >= 10000000 ? "Prêmio Diamante" 
: subscribers >= 1000000 ? "Prêmio Ouro" 
: subscribers >= 100000 ? "Prêmio Prata"
: '';

// If we up a lot of conditionals in the ternary conditional, we have to put an "else condition" at the final of the ternary. That's why we used this ": ''"

console.log(premioYoutube)

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log( access ); // logs "Access granted"

//

var stop = false, age0 = 16;

age0 > 18 ? console.log("Ok. Redirecting") : stop = true;

//

var stop = false, age1 = 23;

age1 > 18 ? (
    console.log("OK, you can go."),
    console.log("Ok. Redirecting")
) : (
    stop = true,
    console.log("Sorry, you are much too young!")
);

// As you can see, if you want to your conditional do more than 1 command, you have to put parentesis to split them from the others e split themselves using an comma.

var age2 = 16;

var url = age2 > 18 ? (
    console.log("OK, you can go."),
 // console.log returns "undefined", but it will be ignored because
 // isn't the last comma-separated value of the parenthesis
    "continue.html" // the value to be assigned if age > 18
) : (
    console.log("You are much too young!"),
    console.log("Sorry :-("),
 // etc. etc.
    "stop.html" // the value to be assigned if !(age > 18)
);

console.log(url); // "stop.html"


/* do while */


/* for each */
/* diferença ++variável e variável++ */
/* prompt no js */
/* axios */
/* pop */
/* shit */
/* unshift */