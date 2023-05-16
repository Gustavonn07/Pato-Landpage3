function nome(){
    let nome = window.prompt(`Olá qual o seu nome? `)
    let texto = document.getElementById("nome-visitante")
    texto.innerText = `Olá ${nome} como você está?`
}