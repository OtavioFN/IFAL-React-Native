let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13]

let listaPrimos = lista.filter((num) => {
    let contador = 0
    for (let i = 1; i <= num; i++) {

        if (num % i == 0) {
            contador++
        }
    }
    if (contador == 2) {
        return num;
    }
})
console.log(listaPrimos)

/* let number = 17
var contador = 0;

for (let i = 1; i <= number; i++) {

    if (number % i == 0) {
        console.log(`Consegui dividir por ${i}`)
        contador++
    }
}
if (contador == 2) {
    console.log('É primo!')
    
}
else {
    console.log("Não é primo")
    console.log(contador)
} */