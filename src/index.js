import checkGuess from './check-guess.js';
//import alphabet from './alphabet.js';

const inputFormNode = document.getElementById('input-form');
const targetWordNode = document.getElementById('target-word');
const guessLetterNode = document.getElementById('guess-letter');
const wrongGuessesNode = document.getElementById('wrong-guesses');
//const canvasNode = document.getElementById('canvas');
//const imageNode = document.getElementById('bear-pic').src;
const woodsSpan = document.getElementById('woods');

const words = [
    'yogi',
    'smokey',
    'winnie',
    'fozzie',
    'corduroy',
    'paddington'
];

const imgSrc = [
    '../assets/bear-1.png',
    '../assets/bear-2.png',
    '../assets/bear-3.png',
    '../assets/bear-4.png',
    '../assets/bear-5.png',
    '../assets/whole-bear-6.png'

];

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
        wrongGuessesNode.textContent += guess + ' ';
        addImage();
    }
    
});

function addImage() {
    const imageNode = document.createElement('img');
    if(wrongGuessesNode.textContent.length === 0) {
        imageNode.src = './assets/bear-0.png';
    }
    else if(wrongGuessesNode.textContent.length === 2) {
        imageNode.src = './assets/bear-1.png';
    }
    else if(wrongGuessesNode.textContent.length === 4) {
        imageNode.src = './assets/bear-2.png';
    }
    else if(wrongGuessesNode.textContent.length === 6) {
        imageNode.src = './assets/bear-3.png';
    }
    else if(wrongGuessesNode.textContent.length === 8) {
        imageNode.src = './assets/bear-4.png';
    }
    else if(wrongGuessesNode.textContent.length === 10) {
        imageNode.src = './assets/bear-5.png';
    }
    else {
        imageNode.src = './assets/whole-bear-6.png';
    }
    woodsSpan.appendChild(imageNode);
}
// function replaceImages() {
//     for(let i = 0; i < imgSrc.length; i++) {
//         const imageSource = imgSrc[i];
        
//         woodsSpan.value.push = imageSource;
//     }
// }

// while(wrongGuessesNode.textContent.length < 7) {
//     replaceImages();
// }

// console.log(wrongGuessesNode);


