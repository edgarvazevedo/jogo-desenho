document.addEventListener('DOMContentLoaded', () => {

    const pincel = {
        ativo: false,
        movendo: false,
        pos: { x: 0, y: 0 },
        posAnterior: null
    }

    const tela = document.querySelector('#tela');
    const context = tela.getContext('2d')


    tela.width = 800;
    tela.height = 800;

    context.lineWidth = 1;
    context.strokeStyle = document.getElementById('color');
    
    
   

    const desenharLinha = (linha) => {

        context.beginPath();
        context.moveTo(linha.posAnterior.x, linha.posAnterior.y);
        context.lineTo(linha.pos.x, linha.pos.y)
        context.stroke();
    }


    tela.onmousedown = (evento) => {pincel.ativo = true};
    tela.onmouseup = (evento) => {pincel.ativo = false};

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX
        pincel.pos.y = evento.clientY
        pincel.movendo = true;
    }

    const ciclo = () => {
        if(pincel.ativo && pincel.movendo && pincel.posAnterior) {
            desenharLinha({pos: pincel.pos, posAnterior: pincel.posAnterior})
            pincel.movendo = false;
        }
        pincel.posAnterior = {x: pincel.pos.x, y:pincel.pos.y}

        setTimeout(ciclo, 10);
    }
    ciclo()
})




function starTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const modalDePerda = document.getElementById('modalDePerda');

    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if(--timer < 0){
            modalDePerda.classList.add('show');
            console.log('rafa guapo');
            timer = duration;
        }

    }, 1000)

    return timer;

    }


  window.onload = function() {

    const duration = 60 * 0.1;
    const display = document.querySelector("#timer");

    timer = starTimer(duration, display);


    /*const modalDePerda = document.getElementById('modalDePerda')
     display.addEventListener( 'change', () => {
            if(timer.minutes == 0 && timer.seconds == 0)
            modalDePerda.classList.remove('show') 
    });*/

    }
// quanto o tempo chegar a 0 sair a imagem que a pessoa 2 perdeu. 


   


        const firstPlayer = document.getElementById('tela2jogador1')
        firstPlayer.innerHTML = 'Jogador 1 : ' + localStorage.getItem('player1')

        const secondPlayer = document.getElementById('tela2jogador2')
        secondPlayer.innerHTML = 'Jogador 2: ' + localStorage.getItem('player2')




        const modalDeVitoria = document.getElementById('modalDeVitoria')
        const botaoGanhou = document.getElementById('botaoGanhou')
        botaoGanhou.addEventListener("click", (event) => {
            modalDeVitoria.classList.add('show') 
        });