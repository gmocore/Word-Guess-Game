// VARIABLES

const wordChoices = ["mario", "luigi", "toad", "yoshi", "koopa"];
const randomIndex = Math.floor(Math.random() * wordChoices.length);
const randomWord = document.getElementById("word");
const usedLetters = document.getElementById("letters");
const currentWord = (randomWord.innerHTML = wordChoices[randomIndex]);
const lifeCount = document.getElementById("life-count");
let incorrectGuesses = [];
let livesRemaining = 9;
let guessResult;
let gameover = false;

// FUNCTIONS

function keyCheck() {
  document.addEventListener("keypress", function(event) {
    if (!gameover) {
      let keyPressed = event.key;
      if (currentWord.includes(keyPressed)) {
        guessResult = "correct";
      } else {
        guessCheck();
        guessResult = "incorrect";
        incorrectGuesses.push(keyPressed);
        usedLetters.innerText = incorrectGuesses.join("").toUpperCase();
      }
    }
  });
}

keyCheck();

function guessCheck() {
  if (guessResult === "incorrect") {
    livesRemaining--;
    lifeCount.innerHTML = `${livesRemaining} lives left!`;
    if (livesRemaining === 0) {
      console.log("game over");
      lifeCount.innerHTML = `GAME OVER!`;
      gameover = true;
    }
  }
}

// Possibly adapt this for word spaces

// let result = []
// function triangle(num) {
//   for(let i = 0; i < num; i++) {
//     result.push('#')
//     let triangle = result.join('')
//     console.log(triangle)
//   }

// }

// triangle(30)
