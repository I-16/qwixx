import { calculateSessionScore } from '../play-page/calc-session-score.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('takes an array of scores and returns the total session score', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const scoreArray = [1, 3, 6, 10, 10];
    const expected = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const output = calculateSessionScore(scoreArray);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(output, expected);
});
