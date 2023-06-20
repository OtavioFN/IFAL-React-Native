//setInterval 

/* function acao(){
    document.write('executando... </br>')
}
setInterval(acao,1000); */

// função anônima 

var timer = setInterval(() => {
    document.write('executando... </br>')
},1000)

// settimeout

setTimeout(() => {
    document.write('oi')
}, 1000)

// objetos

let pessoas = {
    nome: 'Nícolas',
    idade: '25',
    altura: '1,70m',
    cargo: 'estagiário'
}

// puxar itens individuais
pessoas.nome
pessoas.cargo
pessoas.altura

let usuarios = [
    {
    nome: 'Otávio',
    cargo: 'bolsista',
    status: 'ativo'
    },
    {
    nome: 'Nícolas',
    cargo: 'bolsista',
    status: 'ativo'
    },
    {
    nome: 'Ícaro',
    cargo: 'bolsista',
    status: 'ativo'
    },
];

usuarios[1].nome

//templates strings

let nome = 'nícolas'

let sobrenome = 'albuquerque'

let idade = '18'

let mensagem = 'meu nome é: ' + nome + 'e meu sobrenome é: ' + sobrenome + 'e tenho ' + idade 

mensagem = `meu nome é ${nome} e meu sobrenome é ${sobrenome} e tenho ${idade}`