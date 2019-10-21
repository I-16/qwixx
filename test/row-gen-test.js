import { generateRow } from '../play-page/row-gen.js';

const test = QUnit.test;

test('generateRow should output an HTML label object', function(assert) {
    const rowId = 'red';
    const index = 3;

    const expected = "<label></label>";
    const test = generateRow(rowId, index);
    const testOutput = '"' + test + '"';

    assert.equal(testOutput, expected);
});

// Testing in .js file
// import { generateRow } from '../play-page/row-gen.js';

// const testRowRed = generateRow('red', 3);
// debugger;

// const testRowGreen = generateRow('green', 1);
// debugger;