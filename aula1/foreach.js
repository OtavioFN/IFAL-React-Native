//For each

let listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'marie.curie@example.com',
    'margaret.hamilton@example.com',
    'alan.turing@example.com'
]

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso`)
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}°`);
    console.log(`A quantidade de pessoas no processo seletivo é ${array.length}`);
})

// The forEach function expects you send it at most three parameters

// The first param is our item, i.e. each element from our array

// The second param is the position of the item in the array

//The third param is the list itself, using this you can apply new functionaties

// The main difference between the traditional for and the forEach function is that forEach uses a callback function for each element from the array