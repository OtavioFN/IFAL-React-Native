/* Questão: Crie uma função chamada inverterString que recebe uma
string como parâmetro e retorna a string invertida. Por exemplo, se a
entrada for "JavaScript", a saída deve ser "tpircSavaJ".
 */

function inverterString(word){
    let reversedWord = []
    for(let i = word.length -1; i > -1; i--){
        reversedWord.push(word[i])
    }
    return reversedWord.join('');
}

console.log(inverterString('JavaScript'))