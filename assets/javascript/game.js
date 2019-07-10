const wordChoices = ["mario", "luigi", "toad", "yoshi", "koopa"];
const randomIndex = Math.floor(Math.random() * wordChoices.length);
const randomWord = document.getElementById("word");
const currentWord = (randomWord.innerHTML = wordChoices[randomIndex]);
const lifeCount = document.getElementById("life-count");
let livesRemaining = 9;
let guessResult;

function keyCheck() {
  document.addEventListener("keypress", function(event) {
    let keyPressed = event.key;
    console.log(keyPressed);
    if (currentWord.includes(keyPressed)) {
      guessResult = "correct";
      console.log("correct");
    } else {
      guessResult = "incorrect";
      console.log("incorrect");
      guessCheck();
    }
  });
}

keyCheck();

function guessCheck() {
  if (guessResult === "incorrect") {
    livesRemaining--;
    console.log(livesRemaining);
    lifeCount.innerHTML = `${livesRemaining} lives left!`;
    if (livesRemaining === 0) {
      console.log("game over");
      lifeCount.innerHTML = `GAME OVER!`;
    }
  }
}
