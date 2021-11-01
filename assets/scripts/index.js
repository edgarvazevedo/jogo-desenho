document.addEventListener('DOMContentLoaded', () => {

    const pincel = {
        ativo: false,
        movendo: false,
        pos: { x: 0, y: 0 },
        posAnterior: null
    }

    const tela = document.querySelector('#tela');
    const context = tela.getContext('2d')


    tela.width = 700;
    tela.height = 700;

    context.lineWidth = 1;
    context.strokeStyle = "green";
    

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

        setTimeout(ciclo, 5);
    }
    ciclo()
})

document.addEventListener("click", (btn02) => {

//por as funcções para puxar as letras do jogar para o dicas. 
})



  function starTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds; 

    if(--timer < 0){
    timer = duration;
    }

    }, 1000)

    }


  window.onload = function() {

    const duration = 60 * 1;
    const display = document.querySelector("#timer");

    starTimer(duration, display);
    
   }



 
    const formData = new FormData(document.querySelector("#myForm"))
    document.getElementById('myForm').addEventListener('submit', element => {
    element.preventDefault()

    const valorInput = new FormData(element.target)

    const myObject = Object.fromEntries(valorInput)
    console.log('meu objeto', myObject)

    localStorage.setItem('player1', myObject.player1)
    localStorage.setItem('player2', myObject.player2)
    window.location.replace("../../index.html")

    
})

        const firstPlayer = document.getElementById('player1')
        firstPlayer.innerHTML = 'firstName: ' + localStorage.getItem('tela2jogador1')

        const secondPlayer = document.getElementById('player2')
        secondPlayer.innerHTML = 'secondName: ' + localStorage.getItem('tela2jogador2')




// agora passar para a segunda tela 





// document.getElementById("player1").value = "Johnny Bravo";


// colocar meme gretchem quando chegar a 0!!!!!!!!!
/* const myWindow = window.open("", "", "width=200, height=100");
    myWindow.document.write("<p> olar </p>");
    setTimeout(function(){ myWindow.close() }, 5000); */