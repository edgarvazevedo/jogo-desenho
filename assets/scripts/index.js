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
    localStorage.setItem('objeto', myObject.objeto)
    window.location.replace("/segundaTela.html") 
   
})