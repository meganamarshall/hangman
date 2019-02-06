import checkGuess from './check-guess.js';
import alphabet from './alphabet.js';

const inputFormNode = document.getElementById('input-form');
const targetWordNode = document.getElementById('target-word');
const guessLetterNode = document.getElementById('guess-letter');
const wrongGuessesNode = document.getElementById('wrong-guesses');

const words = [
    'yogi',
    'smokey',
    'winnie',
    'fozzie',
    'corduroy',
    'paddington'
];

const imgSrc = [

]

let targetWord = words[Math.floor(Math.random() * words.length)];   
let correctLetters = [];
let correctLetterCount = 0;
let lettersRemaining = 0;

targetWordCreate();

function targetWordCreate() {
    targetWordNode.textContent = '';
    lettersRemaining = 0;
    for(let i = 0; i < targetWord.length; i++) {
        let targetLetter = targetWord[i];
        if(correctLetters.indexOf(targetLetter) > -1) {
            targetWordNode.textContent += targetLetter;
        }
        else {
            targetWordNode.textContent += ' _';
            lettersRemaining++;
        }
    }   
}
console.log(targetWordCreate);

inputFormNode.addEventListener('submit', function() {
    event.preventDefault();
    const guess = guessLetterNode.value;
    if(guess === undefined) {
        return;
    }
    inputFormNode.value = '';

    let result = checkGuess(guess, targetWord);

    if(result) {
        correctLetters[correctLetterCount] = guess;
        correctLetterCount++;
        targetWordCreate();
        return result;
    }
    else {
        wrongGuessesNode.classList.add('wrong-guess');
        wrongGuessesNode.textContent += guess;
  
    }
    
});




