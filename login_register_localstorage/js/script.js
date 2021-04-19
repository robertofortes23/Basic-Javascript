function store(){

    var email = document.getElementById('email');
    var nome = document.getElementById('nome');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Preencha o email');

    }else if(pw.value.length == 0){
        alert('Preencha a senha');

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Verifique seu email e a senha!');

    }else if(pw.value.length > 8){
        alert('Maximo permitido: 8');

    }else if(!pw.value.match(numbers)){
        alert('Por favor adicione 1 numero');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Por favor adicione 1 caractere maiusculo!');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Por favor adicione 1 caractere minusculo!');

    }else{
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert('Sua conta foi criada com sucesso!');
    }
}

//checking
function check(){
    var storedNome = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userNome = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userNome.value == storedNome && userPw.value == storedPw){
        alert('Login efetuado com sucesso!');
    }else{
        alert('Erro ao logar!');
    }
}


/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});