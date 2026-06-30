const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

const btnDiminuir = document.querySelector('#btn-diminuir');
const btnAumentar = document.querySelector('#btn-aumentar');
const btnGerar = document.querySelector('#btn-gerar');
const campoSenha = document.querySelector('#campo-senha');
const barraForca = document.querySelector('#barra-forca');
const checkboxes = document.querySelectorAll('.checkbox');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const acentos = 'áéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕÇ';
const espacos = ' ';

// Inicialização
numeroSenha.textContent = tamanhoSenha;
verificarBotaoGerar();

btnDiminuir.onclick = diminuiTamanho;
btnAumentar.onclick = aumentaTamanho;
btnGerar.onclick = gerarSenha;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        verificarBotaoGerar();
    }
}

function aumentaTamanho() {
    if (tamanhoSenha < 25) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        verificarBotaoGerar();
    }
}

function verificarBotaoGerar() {
    if (tamanhoSenha < 6) {
        btnGerar.disabled = true;
    } else {
        btnGerar.disabled = false;
    }
}

function gerarSenha() {
    let caracteresDisponiveis = '';
    
    if (checkboxes[0].checked) caracteresDisponiveis += letrasMaiusculas;
    if (checkboxes[1].checked) caracteresDisponiveis += letrasMinusculas;
    if (checkboxes[2].checked) caracteresDisponiveis += numeros;
    if (checkboxes[3].checked) caracteresDisponiveis += simbolos;
    if (checkboxes[4].checked) caracteresDisponiveis += espacos;
    if (checkboxes[5].checked) caracteresDisponiveis += acentos;

    if (caracteresDisponiveis === '') {
        campoSenha.value = 'Selecione uma opção!';
        atualizarBarra(0);
        return;
    }

    let senhaGerada = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponiveis.length);
        senhaGerada += caracteresDisponiveis[indiceAleatorio];
    }

    campoSenha.value = senhaGerada;
    calcularForca();
}

function calcularForca() {
    let pontos = 0;
    const temMaiuscula = /[A-Z]/.test(campoSenha.value);
    const temMinuscula = /[a-z]/.test(campoSenha.value);
    const temNumero = /[0-9]/.test(campoSenha.value);
    const temSimbolo = /[^A-Za-z0-9]/.test(campoSenha.value);

    if (tamanhoSenha > 8) pontos += 25;
    if (tamanhoSenha > 12) pontos += 15;
    if (temMaiuscula && temMinuscula) pontos += 20;
    if (temNumero) pontos += 20;
    if (temSimbolo) pontos += 20;

    atualizarBarra(pontos);
}

function atualizarBarra(porcentagem) {
    barraForca.style.width = porcentagem + '%';
    
    if (porcentagem < 40) {
        barraForca.style.backgroundColor = '#ef4444'; // Fraca
    } else if (porcentagem < 80) {
        barraForca.style.backgroundColor = '#f59e0b'; // Média
    } else {
        barraForca.style.backgroundColor = '#10b981'; // Forte
    }
}
