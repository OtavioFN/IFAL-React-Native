// firstly, if you want to use a prompt in node you have to type "npm install prompt-sync" on terminal to install the dependency

//after that, you only have to do it

const qualquerNome = require('prompt-sync')({ sigint: true });
let x;

//this ({sigint: true/false}) will decide if the software will keep running even I type an ctrl+c on the terminal

x = qualquerNome("Type a value: ");

console.log(`x = ${x}`)