const botaoPlayPause = document.querySelector("#play-pause")
const botaoProximo = document.querySelector("#proximo")
const botaoAnterior = document.querySelector("#anterior")
const audio = document.querySelector("#audio-capitulo")
const nomeCapitulo = document.querySelector("#capitulo")

const quantidadeDeCapitulos = 10
let taTocando = false
let capitulo = 1

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play()
    taTocando = true
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause()
    taTocando = false
}

function tocarOuPausar() {
    if(taTocando === true) {
        pausarFaixa()
    } else {
        tocarFaixa()
    }
}

function voltarCapitulo() {
    if(capitulo === 1) {
        capitulo = quantidadeDeCapitulos
    } else {
        capitulo -= 1
    }
    audio.src = `books/dom-casmurro/${capitulo}.mp3`
    nomeCapitulo.innerText = `Capítulo${capitulo}`
    tocarFaixa()
}

function proximoCapitulo() {
    if(capitulo < quantidadeDeCapitulos) {
        capitulo += 1
    } else {
        capitulo = 1
    }
    audio.src = `books/dom-casmurro/${capitulo}.mp3`
    nomeCapitulo.innerText = `Capítulo ${capitulo}`
    tocarFaixa()
}


botaoPlayPause.addEventListener("click", tocarOuPausar)
botaoProximo.addEventListener("click", proximoCapitulo )
botaoAnterior.addEventListener("click", voltarCapitulo)
audio.addEventListener("ended",proximoCapitulo)