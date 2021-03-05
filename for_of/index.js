//For clássico - Geralmente com interáveis (arrays ou strings)
//For in - Retorna o indice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (interáveis, arrays ou strings)

const nome = "Roberto Gomes Fortes";

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('#######')

for (let i in nome){
    console.log(nome[i]);
}

console.log('#######')

for (let valor of nome){
    console.log(valor);
}

console.log('#######')

const array = ['Roberto', 'Teste', 'Fortes']

for (let valor of array){
    console.log(valor);
}

console.log('#######')

array.forEach(function(valor, indice, array){
     console.log(valor, indice, array);
});