import { generateRow } from '../play-page/row-gen.js';

const test = QUnit.test;

test('generateRow should output an HTML label object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const rowId = 'red';
    const index = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = '<label><input type="checkbox"class="red"id="red2"value=5><span class="red-box">5</span></label>';
    const test = generateRow(rowId, index);
    //Assert
    // Make assertions about what is expected valid result

    assert.equal(test, expected);
});