/* let teste = document.querySelector("#teste")

let p = document.createElement("a")

p.setAttribute("href","#")

p.setAttribute("onclick","alerta()")

p.innerHTML = "Olá, pessoal!"

teste.appendChild(p)

function alerta(){
    alert("alerta")
} */

function alphabetPosition(text) {
let numberAlphabet = {
'a': '1',
'b': "2",
'c': '3',
'd': '4',
'e': '5',
'f': '6',
'g': '7',
'h': '8',
'i': '9',
'j': '10',
'k': '11',
'l': '12',
'm': '13',
'n': '14',
'o': '15',
'p': '16',
'q': '17',
'r': '18',
's': '19',
't': '20',
'u': '21',
'v': '22',
'w': '23',
'x': '24',
'y': '25',
'z': '26'
}


console.log(alphabetPosition('Hi'))

let obj = {
    a: 's',
    b: 'fda',
    c: 'afsdf'
}

var hasKey = Object.keys(obj).some(x => x == key);