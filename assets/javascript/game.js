// VARIABLES

const wordChoices = ["mario", "luigi", "toad", "yoshi", "koopa"];
const randomWord = document.getElementById("word");
const usedLetters = document.getElementById("letters");
const lifeCount = document.getElementById("life-count");
let computerWord
let incorrectGuesses = [];
let livesRemaining = 9;
let guessResult;
let gameover = false;
let blank = "_ ";
let blankDisplay = "";

// FUNCTIONS

function generateWord() {
  computerWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]
  console.log(computerWord)
}
generateWord()

function createBlanks() {
  for (let i = 0; i < computerWord.length; i++) {
    blankDisplay += blank
  }
  console.log(blankDisplay)
  usedLetters.textContent = blankDisplay
}

document.addEventListener('keyup', function(event) {
  if (event.keyCode > 64 && event.keyCode < 91) {
    userGuess = event.key
    console.log(userGuess)
    usedLetters.textContent = userGuess
    // flags incorrect guess
    if(!computerWord.includes(userGuess) && !incorrectGuesses.includes(userGuess)) {
      // flags if letter is already present in array
      incorrectGuesses.push(userGuess)
      console.log(incorrectGuesses)
      usedLetters.textContent = incorrectGuesses
      livesRemaining--
      lifeCount.textContent = livesRemaining + ' lives remaining'
      if (livesRemaining < 1) {
        lifeCount.textContent = 'GAME OVER'
      }
    }
  }
  
})

// function keyCheck() {
//   document.addEventListener("keypress", function(event) {
//     if (!gameover) {
//       let keyPressed = event.key;
//       if (currentWord.includes(keyPressed)) {
//         guessResult = "correct";
//       } else {
//         guessCheck();
//         guessResult = "incorrect";
//         incorrectGuesses.push(keyPressed);
//         usedLetters.innerText = incorrectGuesses.join("").toUpperCase();
//       }
//     }
//   });
// }

// keyCheck();

// function guessCheck() {
//   if (guessResult === "incorrect") {
//     livesRemaining--;
//     lifeCount.innerHTML = `${livesRemaining} lives left!`;
//     if (livesRemaining === 0) {
//       console.log("game over");
//       lifeCount.innerHTML = `GAME OVER!`;
//       gameover = true;
//     }
//   }
// }

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
