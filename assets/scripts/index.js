

document.addEventListener("click", (btn02) => {

//por as funcções para puxar as letras do jogar para o dicas. 
})


 //  const formData = new FormData(document.querySelector("#myForm"))
    document.getElementById('myForm').addEventListener('submit', element => {
    element.preventDefault()

    const valorInput = new FormData(element.target)
       console.log(valorInput)
    const myObject = Object.fromEntries(valorInput)
    console.log('meu objeto', myObject)
console.log(element.target)
    localStorage.setItem('player1', myObject.player1)
    localStorage.setItem('player2', myObject.player2)
    window.location.replace("/segundaTela.html") //pode ser usado como b
   
    })



   
        
       
    
            













// agora passar para a segunda tela 





// document.getElementById("player1").value = "Johnny Bravo";


// colocar meme gretchem quando chegar a 0!!!!!!!!!
/* const myWindow = window.open("", "", "width=200, height=100");
    myWindow.document.write("<p> olar </p>");
    setTimeout(function(){ myWindow.close() }, 5000); */