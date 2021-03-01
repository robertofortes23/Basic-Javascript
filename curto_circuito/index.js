/*
&& -> AND -> false && true -> false "o valor mesmo"
|| -> OR -> true && false -> vai retornar "o valor verdadeiro"

Valores avaliados em falso:
FALSY
false
0
'' ""  ``
null / undefined
NaN
*/

console.log('Roberto Fortes' && 0 && 'Maria'); //0
console.log('Roberto Fortes' && true && 'Maria'); //Maria
console.log('Roberto Fortes' && true && NaN); //NaN

function falOi(){
    return 'Oi'
}
const vaiExecutar = ''; //false
vaiExecutar && falaOi();

console.log(0 || false || null || 'Roberto Fortes' || true); //Roberto Fortes

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; //preto


