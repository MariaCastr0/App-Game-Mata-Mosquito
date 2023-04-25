
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var posiçaoX = Math.random() *largura
var posiçaoY = Math.random() * altura

console.log(posiçaoX, posiçaoY)

