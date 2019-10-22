import { scorePenalties } from '../common/utils.js';
import { scoreColor } from '../common/utils.js';

const test = QUnit.test;

test('scoreColor should return 10 with an input of 4', function(assert) {
    const colorChecksCounted = 4;
    const score = scoreColor(colorChecksCounted);

    const expected = 10;

    assert.equal(score, expected);
});

test('scorePenalties should return 20 with an input of 4', function(assert) {
    const penaltiesCounted = 4;
    const score = scorePenalties(penaltiesCounted);

    const expected = 20;

    assert.equal(score, expected);
});

// Testing in .js file
// import { generateRow } from '../play-page/row-gen.js';

// const testRowRed = generateRow('red', 3);
// debugger;

// const testRowGreen = generateRow('green', 1);
// debugger;
