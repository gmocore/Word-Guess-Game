- Create a function to start game

  - Add event for any keypress to trigger game start
    - Possibly add start button/new game button

- Create array with word choices

  - Create function to generate random selection from array
  - Use math object * array.length to create random index
    - Access random index number from created index number of word choice array

- Add event listener for each key press event

  - Listener should read value of keypress
    - If key value is present in selected word, add guessed letter to word display
    - Add sound for correct guess
  - If key value is not present in selected word, add it to the used letters display
    - Add different sound for incorrect guess

- Guessed letter function

  - Loop through selected word
    - If letter is present in word, correct guess is true
    - If letter is not present correct guess is false

- Guess display: empty spaces for each letter of word (word-length): \_ \_ \_ \_ \_ \_ \_

  - For each letter in word, letter = ‘\_’
    - Correct guess replaces blank space with correct letter: M _ D _ N \_ \_
    - Incorrect guess places word in used letter display: W X Y Z

- Create used letter display to display the used letters

  - Once a letter is used, it cannot be used again
  - Incorrect guesses are pushed to an array
    - Array is displayed on screen

- Create variable to display number of wins (correctly guessed words)

  - Variable to increment with each successful guess

- Create a variable for number of guesses remaining

  - Incorrect guess decrements guesses remaining by 1
    - When number reaches zero, trigger game over
      - Add womp womp?

- At game completion (win/lose) restart game with new word
  - Display number of wins upon start of new game
