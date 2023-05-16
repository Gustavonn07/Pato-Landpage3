let anguloAtualDir = 0;
let anguloAtualEsq = 0;

function direita() {
    let imagem = document.getElementById('patinho')
    let incremento = 45;

    imagem.style.transform = `rotate(${anguloAtualDir + incremento}deg)`
    anguloAtualDir += incremento
}

function esquerda(){
    let imagem = document.getElementById('patinho')
    let incremento = -45;

    imagem.style.transform = `rotate(${anguloAtualEsq + incremento}deg)`
    anguloAtualEsq += incremento
}

function imagem(){
    let imagem = document.getElementById('patao')
    let volta = 360
    imagem.style.transform = `rotate(${volta}deg)`
}