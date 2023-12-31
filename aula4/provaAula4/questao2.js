/* 2. Questão: Crie uma função chamada encontrarPalavrasRepetidas que
recebe uma string como parâmetro e retorna um objeto contendo as
palavras repetidas e a quantidade de vezes que cada uma ocorre na
string. Considere que a contagem de palavras é case-insensitive (não faz
distinção entre maiúsculas e minúsculas). Por exemplo, se a entrada for
"Eu gosto de programar em JavaScript, eu também gosto de programar
em Python.", a saída deve ser { eu: 2, gosto: 2, de: 2, programar: 2, em:
2 }. */

function encontrarPalavrasRepetidas(word){
    let splittedWord = word.split(' ')
    let objRepeatedWords = {

    }
    for(let i = 0; i < splittedWord.length; i++){
        let quantidadeElementos = splittedWord.filter(x => x.toUpperCase() == splittedWord[i].toUpperCase()).length
        if(quantidadeElementos > 1 && (!(splittedWord[i] in objRepeatedWords))){
            objRepeatedWords[splittedWord[i]] = quantidadeElementos
            splittedWord.splice(i,1)
        }
    }
    return objRepeatedWords;
}

console.log(encontrarPalavrasRepetidas("Eu gosto de programar em JavaScript, eu também gosto de programar em Python."))