/* pop */
/* shift */
/* unshift */
/* 
.flatMap
.map
.filter
.find
.reduce
.keys
.sort
.some e .every 
*/

/* O método pop() remove o último elemento de um array e retorna esse elemento removido. Isso significa que ele modifica o array original, diminuindo seu tamanho. Por exemplo: */

let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
console.log(removedFruit); // Output: "orange"

/* O método shift() remove o primeiro elemento de um array e retorna esse elemento removido. Assim como o pop(), ele também modifica o array original e atualiza seu tamanho. Veja um exemplo: */

let fruits1 = ["apple", "banana", "orange"];
let removedFruit1 = fruits1.shift();
console.log(fruits1); // Output: ["banana", "orange"]
console.log(removedFruit1); // Output: "apple"

/* O método unshift() adiciona um ou mais elementos ao início de um array e retorna o novo tamanho do array. Ele altera o array original, deslocando os elementos existentes para abrir espaço para os novos elementos. Aqui está um exemplo: */

let fruits2 = ["banana", "orange"];
let newLength2 = fruits2.unshift("apple", "grape");
console.log(fruits2); // Output: ["apple", "grape", "banana", "orange"]
console.log(newLength2); // Output: 4

/* O método flat percorre o array original e, para cada elemento, verifica se ele é um array. Se for um array, os elementos desse array são adicionados ao novo array resultante. Se o elemento não for um array, ele é simplesmente adicionado ao novo array. O processo de achatamento ocorre recursivamente para todos os níveis do array original.

Aqui está um exemplo para ilustrar como o método flat funciona: */

const array = [1, 2, [3, 4, [5, 6]]];

const flattenedArray = array.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

/* O método .map é usado para iterar sobre um array e criar um novo array com os resultados da função de callback aplicada a cada elemento. Aqui está um exemplo: */

const numbersMapFunction = [1, 2, 3, 4];

const doubledNumbers = numbersMapFunction.map((num) => num * 2);

// ou const doubledNumbers = numbersMapFunction.map((num) => {return num * 2});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

/* O método .flatMap é usado para mapear cada elemento de um array e, em seguida, concatenar os resultados em um novo array. É como combinar os métodos .map e .flat em um único método. Aqui está um exemplo: */

const numbers = [1, 2, 3, 4];

const result = numbers.flatMap((num) => [num, num * 2]);

console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

/* O método .filter é usado para criar um novo array com todos os elementos que passam por um determinado teste. Aqui está um exemplo: */

const numbersFilter = [1, 2, 3, 4];

const evenNumbers = numbersFilter.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

/* find: O método find é usado para encontrar o primeiro elemento em um array que satisfaça uma determinada condição. Ele retorna o valor do primeiro elemento que passar no teste da função de callback, ou undefined se nenhum elemento for encontrado. */

const numbersFind = [1, 2, 3, 4, 5];
const evenNumber = numbersFind.find((num) => num % 2 === 0);

console.log(evenNumber); // 2

/* reduce: O método reduce é usado para reduzir os elementos de um array a um único valor. Ele executa uma função de callback em cada elemento do array, acumulando um resultado com base em cada iteração.
Exemplo: */

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15

/* keys: O método keys retorna um novo objeto de tipo Array Iterator que contém as chaves (índices) de um array.
Exemplo: */

const fruitsKeys = ['apple', 'banana', 'orange'];
const keys = Array.from(fruitsKeys.keys());

console.log(keys); // [0, 1, 2]

/* sort: O método sort é usado para ordenar os elementos de um array de acordo com uma função de comparação.
Exemplo: */

const numbersSorted = [3, 1, 4, 2, 5];
numbersSorted.sort();

console.log(numbersSorted); // [1, 2, 3, 4, 5]

/* every: O método every verifica se todos os elementos de um array passam em um determinado teste fornecido por uma função de callback. Ele retorna true se todos os elementos passarem no teste e false caso contrário.
Exemplo: */

const numbersEvery = [2, 4, 6, 8, 10];
const allEven = numbersEvery.every((num) => num % 2 === 0);

console.log(allEven); // true

/* some: O método some verifica se pelo menos um elemento de um array passa em um determinado teste fornecido por uma função de callback. Ele retorna true se algum elemento passar no teste e false caso contrário.
Exemplo: */

const numbersSome = [2, 4, 6, 8, 9];
const hasOdd = numbersSome.some((num) => num % 2 !== 0);

console.log(hasOdd); // true

