// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { updateScores } from '../play-page/update-scores.js';

const test = QUnit.test;

test('takes the counts for each row and returns an array of their scores', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const redCount = 1;
    const yellowCount = 2;
    const greenCount = 3;
    const blueCount = 4;
    const penaltyCount = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = [1, 3, 6, 10, 10];

    const output = updateScores([redCount, yellowCount, greenCount, blueCount, penaltyCount]);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(output, expected);
});
