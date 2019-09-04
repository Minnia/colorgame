let numSquares = 6;
let colors = [];
let pickedColor;
let colorDisplay = document.querySelector("#colorDisplay");
let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let mode = document.querySelectorAll(".mode");
init();

function init() {
  for (let i = 0; i < mode.length; i++) {
    //this can be its own function
    mode[i].addEventListener("click", function() {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
  //this can also be its own function
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      console.log("Clicked a square");
      let clicked = this.style.background;
      if (clicked === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clicked);
        h1.style.background = clicked;
        resetButton.textContent = "Play again?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
    messageDisplay.textContent = "";

    h1.style.background = "steelblue";
  }
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(numSquares) {
  let arr = [];

  for (let i = 0; i < numSquares; i++) {
    arr.push(randomColor());
  }

  return arr;
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function() {
  reset();
});
