import checkGuess from './check-guess.js';

const guessFormNode = document.getElementById('guess-form');

const words = [
    'yogi',
    'smokey',
    'winnie',
    'fozzie',
    'corduroy'
];

let targetWord = words[Math.floor(Math.random() * words.length)];
console.log(targetWord);    
let answerArray = [];
let correctGuessCount = 0;

for(let i = 0; i < targetWord.length; i++) {
    answerArray[i] = '_';
    const targetWordNode = document.getElementById('target-words');
    const targetWordLetters = document.createElement('span');
    targetWordLetters.classList.add('target-words');

    targetWordLetters.appendChild(targetWordNode);    
}


