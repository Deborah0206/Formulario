const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkIputs();
});
function checkIputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "Nome de usuário obrigatório.");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === ""){
        setErrorFor(email, "Email obrigatório.");
    } else{
        setSuccessFor(email);
    }
    if (passwordValue === ""){
        setErrorFor(password, "Senha obrigatoria.");
    } else if (passwordValue.length < 6) {
        setErrorFor(password, " A senha precisa ter no minino 6 caracteres.");
    }else {
        setSuccessFor(password);
    }
    if (passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "Confirmação de senha obrigatoria.")
    } else if (passwordConfirmationValue != passwordValue){
        setErrorFor (passwordConfirmation, "As senhas nao conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
const small = formControl.querySelector('small');
//ADICIONAR MENSAGEM DE ERRO
small.innerText = message;
//ADICIONAR A CLASSE DE ERRO
formControl.className = "form-control error";
}
function setSuccessFor(input){
    //ADICIONAR A CLASSE DE SUCESSO//
    formControl.className = "form-cntrol sucess";
}