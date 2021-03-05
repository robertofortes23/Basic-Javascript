const frutas = ['Maça', 'Uva', 'Pêra']

// for (let i = 0 < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//Lê os indices ou chaves do objeto.
for (let i in frutas ) {
    console.log(frutas[i]);
} 

const pessoa = {
    nome: 'Roberto',
    sobrenome: 'Fortes',
    idade: 22
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

const chave = "nome";
console.log(pessoa[chave]);

for (let teste in pessoa){
    console.log(teste, pessoa[chave])
}