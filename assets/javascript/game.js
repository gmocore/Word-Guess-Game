const wordChoices = ["mario", "luigi", "toad", "yoshi", "koopa"];
const randomIndex = Math.floor(Math.random() * wordChoices.length);

let randomWord = document.getElementById("word");

randomWord.innerHTML = wordChoices[randomIndex];

console.log(randomIndex);
console.log(wordChoices[randomIndex]);
