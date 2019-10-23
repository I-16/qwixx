import { generateAllRows } from './gen-all-rows.js';
import { disableLeftInputs } from './dis-left-inputs.js';
import { countChecks } from '../common/utils.js';
import { scrapeArray } from './scrape-array.js';
import { updateScores } from './update-scores.js';
import { calculateSessionScore } from './calc-session-score.js';
import { disableRow } from './disable-row.js';

const redRow = document.getElementById('red-row');
const yellowRow = document.getElementById('yellow-row');
const greenRow = document.getElementById('green-row');
const blueRow = document.getElementById('blue-row');
const redScoreDisplay = document.getElementById('red-score');
const yellowScoreDisplay = document.getElementById('yellow-score');
const greenScoreDisplay = document.getElementById('green-score');
const blueScoreDisplay = document.getElementById('blue-score');
const penaltyScoreDisplay = document.getElementById('penalty-score');
const sessionScoreDisplay = document.getElementById('session-score-span');
const confirmButton = document.getElementById('confirm-button');
let currentSessionScore;
const diceButton = document.querySelector('input[type=button]');
const allRows = [redRow, yellowRow, greenRow, blueRow];

allRows.forEach(row => {
    const newRow = generateAllRows(row.id);
    const disableBox = document.createElement('button');
    disableBox.value = 'Disable row';
    disableBox.addEventListener('click', () => {

    });
    newRow.forEach(box => {
        disableBox.class = box.children[0].class;
        row.appendChild(box);
    });
});

const updateScoresDisplay = (scoreArray, sessionScore) => {
    redScoreDisplay.textContent = scoreArray[0];
    yellowScoreDisplay.textContent = scoreArray[1];
    greenScoreDisplay.textContent = scoreArray[2];
    blueScoreDisplay.textContent = scoreArray[3];
    penaltyScoreDisplay.textContent = scoreArray[4];
    sessionScoreDisplay.textContent = sessionScore;
};

const confirmClick = () => {
    let redDomArray = document.querySelectorAll('#red-row label');
    let yellowDomArray = document.querySelectorAll('#yellow-row label');
    let greenDomArray = document.querySelectorAll('#green-row label');
    let blueDomArray = document.querySelectorAll('#blue-row label');
    let penaltyDomArray = document.querySelectorAll('#penalty-boxes label');

    let redArray = scrapeArray(redDomArray);
    let yellowArray = scrapeArray(yellowDomArray);
    let greenArray = scrapeArray(greenDomArray);
    let blueArray = scrapeArray(blueDomArray);
    let penaltyArray = scrapeArray(penaltyDomArray);
    const allColorArrays = [redArray, yellowArray, greenArray, blueArray, penaltyArray];

    allColorArrays.forEach(array => {
        disableLeftInputs(array);
    });

    let countArray = [];

    allColorArrays.forEach(array => {
        const arrayChecks = countChecks(array);

        if (array.length > 4) {
            if (arrayChecks >= 5) {
                array[10].children[0].removeAttribute('disabled', true);
            }
            if (array[10].children[0].checked === true) {
                array[11].children[0].checked = true;
                disableRow(array);
                // rowsDisabledCount++;
                // console.log(rowsDisabledCount);
            }
        }

        countArray.push(arrayChecks);
    });

    const scoreArray = updateScores(countArray);
    
    const sessionScore = calculateSessionScore(scoreArray);
    currentSessionScore = sessionScore;

    updateScoresDisplay(scoreArray, sessionScore);
    diceButton.disabled = false;
    
    if (rowsDisabledCounter === 2) {
        allColorArrays.forEach(array => {
            disableRow(array);
        });
    }
    if (countArray[4] === 4) {
        allColorArrays.forEach(array => {
            disableRow(array);
        });
    }
};

confirmButton.addEventListener('click', confirmClick);
