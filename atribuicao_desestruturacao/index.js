//Atribuição via desestruturação por arrays.
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] ;
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);


//Atribuição via desestruturação por obeto.
const pessoa = {
    nome: 'Roberto',
    sobrenome: 'Fortes',
    idade: 30,
    emdereco:{
        rua: 'Av Duque de Caxias',
        numero: 220
    }
};

//Atribuição via desestruturação
const { nome = nome? nome : 'Roberto Fortes', sobrenome, idade } = pessoa;
console.log(nome);

const { endereco: {rua: r, numero}, endereco } = pessoa;
console.log(r, numero);
console.log("Endereço completo",endereco);

const { nome, ...resto } = pessoa;
console.log (nome, resto); 


