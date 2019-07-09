const wordChoices = ["mario", "luigi", "toad", "yoshi"];
const randomIndex = Math.ceil(Math.random() * wordChoices.length - 1);

let randomWord = document.getElementById("word");

randomWord.innerHTML = wordChoices[randomIndex];

console.log(randomIndex);
console.log(wordChoices[randomIndex]);
