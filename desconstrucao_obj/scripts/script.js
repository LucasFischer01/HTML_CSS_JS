let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fischer',
    idade: 26,
    social: {
        facebook: 'Lucas Fischer',
        instagram: ' lucasfischer'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};
// método antigo:

let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;

console.log(nome, sobrenome, idade);

// método após ECMAScript 6 com alteração de nome da variável:
let { nome: nome1, sobrenome: sobrenome1, idade: idade1 =0 } = pessoa;

console.log(nome1, sobrenome1, idade1);

