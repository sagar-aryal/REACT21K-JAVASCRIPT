let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let startGameAudio = document.getElementById("start-game-music");
let endGameAudio = document.getElementById("end-game-music");
let close = document.getElementById("close");

let score = 0;
let active = 0;
let started = false;
let totalGeneration = 0;
let speed = 1500;
let timer;

buttons[0].onclick = function () {
  clicked(0);
};
buttons[1].onclick = function () {
  clicked(1);
};
buttons[2].onclick = function () {
  clicked(2);
};
buttons[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  if (started) {
    if (i === active) {
      score++;
      scoredisplay.textContent = `Your score is ${score}`;
    } else {
      endGame();
    }
  }
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runGame = () => {
  if (started) {
    if (totalGeneration - score >= 3) {
      endGame();
    }
    if (speed > 500 && totalGeneration > 0 && totalGeneration % 10 === 0) {
      speed -= 200;
    }
    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = nextActive;

    timer = setTimeout(runGame, speed);

    function pickNew(active) {
      let nextActive = getRandomInt(0, 3);

      if (nextActive !== active) {
        return nextActive;
      } else {
        return pickNew(active);
      }
    }
    totalGeneration += 1;
  }
  console.log("running");
};

const startGame = () => {
  document.getElementById("start-game-button").style.display = "none";
  started = true;
  startGameAudio.play();
  runGame();
};

const endGame = () => {
  startGameAudio.pause();
  startGameAudio.currentTime = 0;
  endGameAudio.play();
  started = false;
  clearTimeout(timer);
  console.log("Game over");
  overlay.style.visibility = "visible";
  gameover.textContent = `Your score is ${score}`;
};

const reloadGame = () => {
  window.location.reload();
};

close.addEventListener("click", reloadGame);
