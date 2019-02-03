const test = QUnit.test;

import checkGuess from ../src/check-guess.js'

test('check if guess equals any letters in target word', function(assert) {
    const guess = 'e';
    const targetWord = 'megan';

    const result = checkGuess(guess, targetWord);
    const expected = true;

    assert.equal(result, expected);
});
test('guess does not match any letters in target word', function(assert) {
    const guess = 'p';
    const targetWord = 'megan';

    const result = checkGuess(guess, targetWord);
    const expected = false;

    assert.equal(result, expected);
});