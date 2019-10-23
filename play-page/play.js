import { generateAllRows } from './gen-all-rows.js';    
import { disableLeftInputs } from './dis-left-inputs.js';
import { countChecks, getUser } from '../common/utils.js';
import { scrapeArray } from './scrape-array.js';
import { updateScores } from './update-scores.js';
import { calculateSessionScore } from './calc-session-score.js';
<<<<<<< HEAD
import { disableRow } from './disable-row.js';
=======
import { endGame } from './end-game.js';
>>>>>>> 94ef18e22b75f733cba5035d0f05707fcd50f06c

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
const endGameButton = document.getElementById('end-game-button');
let currentSessionScore;
let currentUser = {};
currentUser = getUser();
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

const linkLastBoxes = (row) => {
    if (row[10].children[0].checked){
        row[11].children[0].checked;
    }
};

const onClick = () => {
    let row = event.target.class;
    linkLastBoxes(row);
};

allRows.forEach(row => {
    row[10].children[0].addEventListener('change', onClick);
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

        if (array.length > 4){
            if (arrayChecks >= 5){
                array[10].children[0].removeAttribute('disabled', true);
            }
            if (array[10].children[0].checked === true){
                array[11].children[0].checked = true;
                disableRow(array);
            }
        }

        countArray.push(arrayChecks);
    });

    const scoreArray = updateScores(countArray);

    const sessionScore = calculateSessionScore(scoreArray);
    currentSessionScore = sessionScore;

    updateScoresDisplay(scoreArray, sessionScore);
    diceButton.disabled = false;

};

const endGameClick = () => {
    endGame(currentUser.name, currentSessionScore);
}

confirmButton.addEventListener('click', confirmClick);
endGameButton.addEventListener('click', endGameClick);