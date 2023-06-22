let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let message = document.querySelector("#message");

function calculateIMC(){
    let heightValue = parseFloat(heightInput.value);
    let weightValue = parseFloat(weightInput.value);
    let imc = weightValue/(heightValue**2);

    let status =  imc < 18.5
    ? "Abaixo do peso"
    : imc >= 18.5 && imc <= 24.9
    ? "Peso normal"
    : imc >= 25 && imc <= 29.9
    ? "Sobrepeso"
    : imc >= 30
    ? "Obesidade"
    : "Informe informações adequadas!";

    let text = `Your IMC rate is ${imc} and your status is ${status}`

    message.innerHTML = text;

    heightInput.value = ''
    weightInput.value = ''

}