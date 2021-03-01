const data = new Date();
console.log(data.toString());

const data2 = new Date(2019, 3, 15, 14, 27, 500);
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:59');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); //Mês começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia Semana', data3.getDay()); // 0 - Domingo, 6 - Sábado
console.log('Seg', data3.now());



console.log(data3.toString());

//Formatador de Data

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}