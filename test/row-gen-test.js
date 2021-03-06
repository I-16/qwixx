import { generateRow } from '../play-page/row-gen.js';

const test = QUnit.test;

test('scoreChecked ', function(assert) {
    const rowId = 'red';
    const index = 3;

    const expected = '<label></label>';
    const test = generateRow(rowId, index);
    const testOutput = '"' + test + '"';

    assert.equal(testOutput, expected);
});