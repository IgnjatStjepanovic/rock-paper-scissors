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
    document.getElementById("playerchoice").innerHTML = "Rock";
    document.getElementById("cpuchoice").innerHTML = "Rock";
    checker = 0;
  }

  if (userChoice == "paper" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    document.getElementById("playerchoice").innerHTML = "Paper";
    document.getElementById("cpuchoice").innerHTML = "Paper";
    checker = 0;
  }

  if (userChoice == "scissor" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    document.getElementById("playerchoice").innerHTML = "Scissor";
    document.getElementById("cpuchoice").innerHTML = "Scissor";
    checker = 0;
  }

  if (userChoice == "rock" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    document.getElementById("playerchoice").innerHTML = "Rock";
    document.getElementById("cpuchoice").innerHTML = "Scissor";
    checker = 1;
  }

  if (userChoice == "rock" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    document.getElementById("playerchoice").innerHTML = "Rock";
    document.getElementById("cpuchoice").innerHTML = "Paper";
    checker = 2;
  }

  if (userChoice == "paper" && computerChoice == "rock") {
    document.getElementById("cpusymbol").src = "rock.png";
    document.getElementById("playerchoice").innerHTML = "Paper";
    document.getElementById("cpuchoice").innerHTML = "Rock";
    checker = 1;
  }

  if (userChoice == "paper" && computerChoice == "scissor") {
    document.getElementById("cpusymbol").src = "scissor.png";
    document.getElementById("playerchoice").innerHTML = "Paper";
    document.getElementById("cpuchoice").innerHTML = "Scissor";
    checker = 2;
  }

  if (userChoice == "scissor" && computerChoice == "paper") {
    document.getElementById("cpusymbol").src = "paper.png";
    document.getElementById("playerchoice").innerHTML = "Scissor";
    document.getElementById("cpuchoice").innerHTML = "Paper";
    checker = 1;
  }

  if (userChoice == "scissor" && computerChoice == "rock") {
    document.getElementById("cpusymbol").src = "rock.png";
    document.getElementById("playerchoice").innerHTML = "Scissor";
    document.getElementById("cpuchoice").innerHTML = "Rock";

    checker = 2;
  }

  if (checker == 0) {    
    let draws = document.getElementById("drawsnumber");
    let drawsint = parseInt(draws.innerHTML);
    draws.innerHTML = drawsint + 1;
    document.getElementById("roundresult").innerHTML = "Draw!";
    document.getElementById('drawstext').style.background = "#6fe15a";
    setTimeout(myTimer, 150);
    function myTimer () {
      document.getElementById('drawstext').style.background = "";
    } 
  }

  if (checker == 1) {
    let scoreplayer = document.getElementById("scoreplayer");
    let current = parseInt(scoreplayer.innerHTML);
    scoreplayer.innerHTML = current + 1;
    document.getElementById("roundresult").innerHTML = "You win!";
    document.getElementById('humanplayer').style.background = "#6fe15a";
    setTimeout(myTimer, 150);
    function myTimer () {
      document.getElementById('humanplayer').style.background = "white";
    }   
  }

  if (checker == 2) {
    let scorecpu = document.getElementById("scorecpu");
    let current = parseInt(scorecpu.innerHTML);
    scorecpu.innerHTML = current + 1;
    document.getElementById("roundresult").innerHTML = "CPU wins!";    
    document.getElementById('cpuplayer').style.background = "#6fe15a";
    setTimeout(myTimer, 150);
    function myTimer () {
      document.getElementById('cpuplayer').style.background = "white";
    }
  }

  let currentRound = document.getElementById("roundnumber");
  let currentRoundParsed = parseInt(currentRound.innerHTML);
  currentRound.innerHTML = currentRoundParsed + 1;

  if (currentRoundParsed >= 14) {
    let scorecpu = document.getElementById("scorecpu");
    let scoreplayer = document.getElementById("scoreplayer");
    let currentcpu = parseInt(scorecpu.innerHTML);
    let currentplayer = parseInt(scoreplayer.innerHTML);

    if (currentcpu > currentplayer) {
      document.getElementById("roundtitle").innerHTML = "CPU WINS! Press Reset to play again";
    }

    if (currentcpu < currentplayer) {
      document.getElementById("roundtitle").innerHTML = "YOU WIN! Press Reset to play again";
    }

    if (currentcpu == currentplayer) {
      document.getElementById("roundtitle").innerHTML = "IT'S A DRAW! Press Reset to play again";
    }

    document.getElementById('playingfield').style.pointerEvents = 'none';

  }
}

function getComputerchoice(max) {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
