const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Interferi no N2.');
        continue;
    }

    if (numero === 7){
        console.log(numero);
        break; //para no 7
    }

}