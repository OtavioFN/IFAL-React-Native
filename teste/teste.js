let teste = document.querySelector("#teste")

let p = document.createElement("a")

p.setAttribute("href","#")

p.setAttribute("onclick","alerta()")

p.innerHTML = "Olá, pessoal!"

teste.appendChild(p)

function alerta(){
    alert("alerta")
}