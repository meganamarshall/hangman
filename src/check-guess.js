function checkGuess(guess, targetWord) {
    const index = targetWord.indexOf(guess);
    if(index > -1) {
        return true;
    }
    else {
        return false;
    }
}

export default checkGuess;