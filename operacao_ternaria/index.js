// ? :

//Exemplo1
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

//Exemplo2
const corUsuario = null;
const corPadrao = corUsuario || "Azul";
console.log(corPadrao);

//Exemplo3
const RobertoCalc = Math.PI > 4 ? "Sim" : "Não";
console.log(RobertoCalc);

//Exemplo4
const firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
console.log( access ); // logs "Access granted"

//Você também pode usar avaliações ternárias no espaço livre de modo a fazer diferentes operações:
const stop = false, age = 16;
age > 18 ? location.assign("continue.html") : stop = true;

//Você também pode fazer mais do que uma única operação em cada caso, separando-os por vírgula:
let stop = false, age = 23;
age > 18 ? (
    alert("OK, voce pode ir."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Desculpe, você é muito jovem!")
);