
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posiçaoRandomica() {

var posiçaoX = Math.floor(Math.random() * largura) - 90
var posiçaoY = Math.floor(Math.random() * altura) - 90

posiçaoX = posiçaoX < 0 ? 0 : posiçaoX
posiçaoY = posiçaoY < 0 ? 0 : posiçaoY

console.log(posiçaoX, posiçaoY)

//criar o elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posiçaoX + 'px'
mosquito.style.top = posiçaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}