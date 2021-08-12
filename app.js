const buttonRock = document.getElementById("playerrock");
const buttonPaper = document.getElementById("playerpaper");
const buttonScissor = document.getElementById("playerscissor");
const scorePlayer = document.getElementById("scoreplayer");
const scoreCpu = document.getElementById("scorecpu");
const buttonReset = document.getElementById("resetbutton");
const roundResult = document.getElementById("roundresult");

buttonRock.addEventListener("click", function () {
  game("rock");
});

buttonPaper.addEventListener("click", function () {
  game("paper");
});

buttonScissor.addEventListener("click", function () {
  game("scissor");
});

buttonReset.addEventListener("click", function () {
  location.reload();
});

let checker = 0;

function game(userChoice) {
  const computerChoice = getComputerchoice();

  if (userChoice == "rock" && computerChoice == "rock") {
    document.getElementById("cpusymbol").src = "rock.png";
    checker = 0;
  }

  if (userChoice == "paper" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    checker = 0;
  }

  if (userChoice == "scissor" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    checker = 0;
  }

  if (userChoice == "rock" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    checker = 1;
  }

  if (userChoice == "rock" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    checker = 2;
  }

  if (userChoice == "paper" && computerChoice == "rock") {
    document.getElementById("cpusymbol").src = "rock.png";
    checker = 1;
  }

  if (userChoice == "paper" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    checker = 2;
  }

  if (userChoice == "scissor" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    checker = 1;
  }

  if (userChoice == "scissor" && computerChoice == "rock") {
    document.getElementById("cpusymbol").src = "rock.png";
    checker = 2;
  }

  if (checker == 0) {
    console.log("DRAW");
  }

  if (checker == 1) {
    let scoreplayer = document.getElementById("scoreplayer");
    let current = parseInt(scoreplayer.innerHTML);
    scoreplayer.innerHTML = current + 1;
    console.log("I WON");    
  }

  if (checker == 2) {
    let scorecpu = document.getElementById("scorecpu");
    let current = parseInt(scorecpu.innerHTML);
    scorecpu.innerHTML = current + 1;
    console.log("I LOST");
  }
}

function getComputerchoice(max) {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
