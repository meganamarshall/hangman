const targetWordNode = document.getElementById('target-word');
const availableLetters = 'abcdefghijklmnopqrstuvwxyz';
const remainingGuesses = 0;
const maxGuesses = 10;
const messages = [
    'you win! you are safe',
    'you lose! the bear is coming!',
    'you already guessed that letter - try again',
    'please enter a valid guess'
];
const words = [
    'yogi',
    'smokey',
    'winnie',
    'fozzie',
    'corduroy'
];
let gameStarted = false;
let guessedLetters = [];
let guessingWord = [];

function startGame() {
    remainingGuesses = maxGuesses;
    gameStarted = false;
    let targetWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guessingWord = [];

    //make sure the hangman image is cleared out??

    //build the guessing word and clear it out
    
}

const guessInput = document.getElementById('guess-letters').nodeValue;
const answerArray = [];

// making the _ spaces appear where the word will be
for(let i = 0; i < targetWord.length; i++) {
    const letterSpaces = document.createElement('span')
    letterSpaces.classList.add('target-letters');
    answerArray[i] = '_';
    targetWordNode.appendChild(letterSpaces);
}

const remainingLetters = targetWord.length;

//while(remainingLetters > 0) {
    // game code
    // show player their progress
    // take input from the player
    // update answerAray 
}