import { countChecks } from '../common/utils.js';

const test = QUnit.test;

test('countChecks on an array of labels should return the number of checked checkbox inputs inside them', function(assert) {
    const checkboxArray = [
        { "<label checked></label>" },
        { "<label checked></label>" },
        { "<label checked></label>" },
        { "<label checked></label>" },
        { "<label checked></label>" }
    ]

    const expected = '<label></label>';
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
