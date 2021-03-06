import { scorePenalties } from '../common/utils.js';
import { scoreColor } from '../common/utils.js';

const test = QUnit.test;

test('scoreColor should return 10 with an input of 4', function(assert) {
    const colorChecksCounted = 4;
    const score = scoreColor(colorChecksCounted);

    const expected = 10;

    assert.equal(score, expected);
});

test('scoreColor should return 0 with an input of 0', function(assert) {
    const colorChecksCounted = 0;
    const score = scoreColor(colorChecksCounted);

    const expected = 0;

    assert.equal(score, expected);
});


test('scorePenalties should return 20 with an input of 4', function(assert) {
    const penaltiesCounted = 4;
    const score = scorePenalties(penaltiesCounted);

    const expected = 20;

    assert.equal(score, expected);
});

test('scorePenalties should return 0 with an input of 0', function(assert) {
    const penaltiesCounted = 0;
    const score = scorePenalties(penaltiesCounted);

    const expected = 0;

    assert.equal(score, expected);
});