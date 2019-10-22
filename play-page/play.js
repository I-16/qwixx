import { generateAllRows } from './gen-all-rows.js';    
import { disableLeftInputs } from './dis-left-inputs.js';
import { countChecks, scoreColor, scorePenalties } from '../common/utils.js';
import { scrapeArray } from './scrape-array.js';

const redRow = document.getElementById('red-row');
const yellowRow = document.getElementById('yellow-row');
const greenRow = document.getElementById('green-row');
const blueRow = document.getElementById('blue-row');
const redScoreDisplay = document.getElementById('red-score');
const yellowScoreDisplay = document.getElementById('yellow-score');
const greenScoreDisplay = document.getElementById('green-score');
const blueScoreDisplay = document.getElementById('blue-score');
const penaltyScoreDisplay = document.getElementById('penalty-score');
const confirmButton = document.getElementById('confirm-button');

const allRows = [redRow, yellowRow, greenRow, blueRow];

allRows.forEach(row => {
    const newRow = generateAllRows(row.id);
    newRow.forEach(box => {
        row.appendChild(box);
    });
});

const updateScoresDisplay = (scoreArray) => {
    redScoreDisplay.textContent = scoreArray[0];
    yellowScoreDisplay.textContent = scoreArray[1];
    greenScoreDisplay.textContent = scoreArray[2];
    blueScoreDisplay.textContent = scoreArray[3];
    penaltyScoreDisplay.textContent = scoreArray[4];
};

const confirmClick = () => {
    let redDomArray = document.querySelectorAll('#red-row label');
    let yellowDomArray = document.querySelectorAll('#yellow-row label');
    let greenDomArray = document.querySelectorAll('#green-row label');
    let blueDomArray = document.querySelectorAll('#blue-row label');

    let testArray = scrapeArray(redDomArray);

    let scoreArray = [];
    
    allRows.forEach(row => {
        disableLeftInputs(row);
        const numberOfChecks = countChecks(row);
        const colorScore = scoreColor(numberOfChecks);
        scoreArray.push(colorScore);
    });

    const penaltyBoxArray = document.querySelectorAll('input[type=checkbox].penalty');
    const penaltyCount = countChecks(penaltyBoxArray);
    const penaltyScore = scorePenalties(penaltyCount);
    scoreArray.push(penaltyScore);

    updateScoresDisplay(scoreArray);
};

confirmButton.addEventListener('click', confirmClick);