const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

canvas.width = 600;
canvas.height = 600;

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}



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
            const objeto = document.getElementById('objetotela2');
            objeto.innerHTML = 'Objeto: ' + localStorage.getItem('objeto');
            timer = duration;
        }

    }, 1000)

    return timer;

    }


  window.onload = function() {

    const duration = 60 * 0.5;
    const display = document.querySelector("#timer");
    var adivinhar = "Objeto: ";

    for(var i=0; i<localStorage.getItem('objeto').length; i++) {
        adivinhar += '@';
    }

    console.log(adivinhar);

    const objeto = document.getElementById('objetotela2');
    objeto.innerHTML = adivinhar;

    timer = starTimer(duration, display);

}
  

        //dados primeira tela para a segunda
        const firstPlayer = document.getElementById('tela2jogador1')
        firstPlayer.innerHTML = 'Jogador 1: ' + localStorage.getItem('player1')

        const secondPlayer = document.getElementById('tela2jogador2')
        secondPlayer.innerHTML = 'Jogador 2: ' + localStorage.getItem('player2')



        // aparecer imagem 
        const modalDeVitoria = document.getElementById('modalDeVitoria')
        const botaoGanhou = document.getElementById('botaoGanhou')
        botaoGanhou.addEventListener("click", (event) => {
            const objeto = document.getElementById('objetotela2');
            objeto.innerHTML = 'Objeto: ' + localStorage.getItem('objeto');
            modalDeVitoria.classList.add('show') 
        });