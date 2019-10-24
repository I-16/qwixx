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
let saveStateRedRow = [];
let saveStateYellowRow = [];
let saveStateGreenRow = [];
let saveStateBlueRow = [];
let redDisabledBool = false;
let yellowDisabledBool = false;
let greenDisabledBool = false;
let blueDisabledBool = false;

const allRows = [redRow, yellowRow, greenRow, blueRow];

const saveDisabledState = (buttonId, rowArray) => {
    let swapArray = [];
    let disabledArray = [];

    switch (buttonId) {
        case 'red':
            swapArray = rowArray.slice();
            for (let i = 0; i < 13; i++){
                const popForDisable = rowArray.pop();
                disabledArray.push(popForDisable);
            }
            for (let i = 0; i < 13; i++){
                const popForDisable = swapArray.pop();
                saveStateRedRow.push(popForDisable);
            }
            redDisabledBool = true;
            return disabledArray;

        case 'yellow':
            swapArray = rowArray.slice();
            for (let i = 0; i < 13; i++){
                const popForDisable = rowArray.pop();
                disabledArray.push(popForDisable);
            }
            for (let i = 0; i < 13; i++){
                const popForDisable = swapArray.pop();
                saveStateYellowRow.push(popForDisable);
            }
            yellowDisabledBool = true;
            return disabledArray;
            
        case 'green':
            swapArray = rowArray.slice();
            for (let i = 0; i < 13; i++){
                const popForDisable = rowArray.pop();
                disabledArray.push(popForDisable);
            }
            for (let i = 0; i < 13; i++){
                const popForDisable = swapArray.pop();
                saveStateGreenRow.push(popForDisable);
            }
            greenDisabledBool = true;
            return disabledArray;
            
        case 'blue':
            swapArray = rowArray.slice();
            for (let i = 0; i < 13; i++){
                const popForDisable = rowArray.pop();
                disabledArray.push(popForDisable);
            }
            for (let i = 0; i < 13; i++){
                const popForDisable = swapArray.pop();
                saveStateBlueRow.push(popForDisable);
            }
            blueDisabledBool = true;
            return disabledArray;
    }
};

const retrieveDisabledState = (buttonId) => {
    let returnArray = [];

    switch (buttonId) {
        case 'red':
            for (let i = 0; i < 13; i++){
                const popForDisable = saveStateRedRow.pop();
                returnArray.push(popForDisable);
            }
            redDisabledBool = false;
            return returnArray;
        case 'yellow':
            returnedArray = saveStateYellowRow.slice();
            yellowDisabledBool = false;
            break;
        case 'green':
            returnedArray = saveStateGreenRow.slice();
            greenDisabledBool = false;
            break;
        case 'blue':
            returnedArray = saveStateBlueRow.slice();
            blueDisabledBool = false;
            break;
    }
    return returnedArray;
};

export const disableClick = () => {
    let redDomArray = document.querySelectorAll('#red-row label');
    let yellowDomArray = document.querySelectorAll('#yellow-row label');
    let greenDomArray = document.querySelectorAll('#green-row label');
    let blueDomArray = document.querySelectorAll('#blue-row label');
    let redArray = scrapeArray(redDomArray);
    let yellowArray = scrapeArray(yellowDomArray);
    let greenArray = scrapeArray(greenDomArray);
    let blueArray = scrapeArray(blueDomArray);

    let buttonId = event.target.id;

    switch (buttonId){
        case 'red':
            if (!redDisabledBool){
                let catchArray = saveDisabledState(buttonId, redArray);
                for (let i = 0; i < 13; i++){
                    const popForDisable = catchArray.pop();
                    redArray.push(popForDisable);
                }
                disableRow(redArray);
            } else {
                let catchArray = retrieveDisabledState(buttonId);
                redArray.splice(0, 13);
                for (let i = 0; i < 13; i++){
                    const shiftForDisable = catchArray.shift();
                    redArray.push(shiftForDisable);
                }
            }
            redArray[12].children[0].removeAttribute('disabled', true);
            break;
        case 'yellow':
            if (!yellowDisabledBool){
                let catchArray = saveDisabledState(buttonId, yellowArray);
                for (let i = 0; i < 13; i++){
                    const popForDisable = catchArray.pop();
                    yellowArray.push(popForDisable);
                }
                disableRow(yellowArray);
            } else {
                yellowArray = retrieveDisabledState(buttonId);
            }
            break;
        case 'green':
            if (!greenDisabledBool){
                let catchArray = saveDisabledState(buttonId, greenArray);
                for (let i = 0; i < 13; i++){
                    const popForDisable = catchArray.pop();
                    greenArray.push(popForDisable);
                }
                disableRow(greenArray);
            } else {
                greenArray = retrieveDisabledState(buttonId);
            }
            break;
        case 'blue':
            if (!blueDisabledBool){
                let catchArray = saveDisabledState(buttonId, blueArray);
                for (let i = 0; i < 13; i++){
                    const popForDisable = catchArray.pop();
                    blueArray.push(popForDisable);
                }
                disableRow(blueArray);
            } else {
                blueArray = retrieveDisabledState(buttonId);
            }
            break;
    }
};

allRows.forEach(row => {
    const newRow = generateAllRows(row.id);
    newRow.forEach(box => {
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

confirmButton.addEventListener('click', confirmClick);

