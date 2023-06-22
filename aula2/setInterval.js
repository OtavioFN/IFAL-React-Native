//setInterval e setTimeout 

function acao(){
    document.write('executando... </br>')
}

setInterval(acao,1000);
/* setInterval is like a while without a counter... infinite */

// função anônima 

var timer = setInterval(() => {
    document.write('executando... </br>')
},1000)

// settimeout is like an action which wait some miliseconds to happen only once

setTimeout(() => {
    document.write('oi')
}, 1000)

