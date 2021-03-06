function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);//Numero inteiro.
}

const min = 0
const max = 60
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min,max);
    console.log(rand)
}

console.log('######');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);