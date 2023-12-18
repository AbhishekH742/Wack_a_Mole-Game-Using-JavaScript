const boxes = document.querySelectorAll(".container div");
const result = document.querySelector(".result");
const timeLeft = document.querySelector(".time-left");
const mole = document.querySelector(".mole");

// console.log(imgEl);

let score = 0;
let molePosition = null;
let currTime = 60;
let timer = null;

function randomPosition() {
  // remove class mole if it is there in any boxes
  boxes.forEach((box) => {
    box.classList.remove("mole");
  });

  let randomLocation = boxes[Math.floor(Math.random() * boxes.length)]; // getting random box from array of boxes
  // console.log(randomLocation);

  randomLocation.classList.add("mole");
  // console.log(randomLocation.id);

  molePosition = randomLocation.id;
}

boxes.forEach((box) => {
  box.addEventListener("mousedown", function () {
    if (box.id == molePosition) {
      score++;
      result.textContent = score;
      molePosition = null; // not necessarly
    }
  });
});


function moleMovement() {
    timer = setInterval(randomPosition, 800);
}

moleMovement();

function countDown(){
    currTime--;
    timeLeft.textContent = currTime;
    if(currTime == 0 )
    {
        clearInterval(countDownTimer);
        clearInterval(timer);
        alert("Game Over! You scored : " + score + " points.");
    }
}


let countDownTimer = setInterval(countDown, 1000);
