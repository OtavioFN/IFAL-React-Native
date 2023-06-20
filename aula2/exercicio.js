


function calcular(){
let weight = document.getElementById('peso').value
let height = document.getElementById('altura').value

imc = (weight / height ** 2).toFixed(3)

let status1 = ''

if (imc < 18.5){
    status1 = 'Magreza'
}else if(imc > 18.5 && imc < 24.9){
    status1= 'Normal'
}else if(imc > 25 && imc < 29.9){
    status1 = 'Sobrepeso'
}
else if(imc > 30 && imc < 39.9){
    status1 = 'Obesidade'
}
else if(imc > 40){
    status1 = 'Obesidade grave'
}

document.write(`Seu imc é de ${imc} e seu status é de ${status1}`);
}