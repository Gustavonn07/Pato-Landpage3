let anguloAtual = 0

function direita() {
    let imagem = document.getElementById('patinho')
    let incremento = -45;

    imagem.style.transform = `rotate(${anguloAtual + incremento}deg)`
    anguloAtual += incremento
}

function esquerda(){
    let imagem = document.getElementById('patinho')
    let incremento = 45;

    imagem.style.transform = `rotate(${anguloAtual + incremento}deg)`
    anguloAtual += incremento
}

function imagem(){
    let imagem = document.getElementById('patao')
    let volta = 360
    imagem.style.transform = `rotate(${volta + anguloAtual}deg)`
    anguloAtual += volta
}