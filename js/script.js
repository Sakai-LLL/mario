
//crio uma variavel que vai guardar a imagem do mario
const mario = document.querySelector('.mario')

//guardando a imagem em uma variavel pipe
const pipe = document.querySelector('.pipe')

//armazenando as nuvens em uma variavel 
const cloud = document.querySelector('.clouds')

//crio uma funcao seta (arrow function)
const jump = () => {
    //aqui ele vai adicionar a classe jump do css na imagem do mario fazendo ele pular
    mario.classList.add('jump');
    setTimeout(() => {
        //removo a classe para poder colocar novamente ao clicar qualquer tecla
        mario.classList.remove('jump');
    }, 500);
};

//ao precionar a tecla, chamo a funcao seta jump
document.addEventListener('keydown', jump)

const loop = setInterval(() => {
    const pipePositon = pipe.offsetLeft

    const marioPosition = +getComputedStyle(mario).bottom.replace("px", "")

    if (pipePositon <= 120 && pipePositon > 0 && marioPosition < 110){
        console.log(marioPosition)
        pipe.computedStyleMap.animation = "none"
        pipe.style.left = `${pipePositon}px`

        mario.style.animation = "none"
        mario.style.bottom = "none"

        mario.src = './imagens/game-over.png'
        mario.style.width = '500px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10);
