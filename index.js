let dodger = document.getElementById("dodger");
let board = document.querySelector("div#game");

// Move Left
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

// ArrowLeft Listener
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Move Right
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

// ArrowRight Listener
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  // The code below, if substituted in for the "360" works just fine. Wouldn't the below be preferable if the board had a variable size?
  // (board.offsetWidth - dodger.offsetWidth)