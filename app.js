let pressedButtonRock = document.getElementById('playerrock')
let pressedButtonPaper = document.getElementById('playerpaper')
let pressedButtonScissor = document.getElementById('playerscissor')

function getPressedButton (event) {
    console.log(event.target.id)
}

pressedButtonRock.onclick = getPressedButton;
pressedButtonPaper.onclick = getPressedButton;
pressedButtonScissor.onclick = getPressedButton;

