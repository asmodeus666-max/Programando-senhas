const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha__botao');
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)
botoes[0].onclick = diminuiTamanho;
function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
}
function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
}
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
