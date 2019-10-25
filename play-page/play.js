import { generateAllRows } from './gen-all-rows.js';
import { disableLeftInputs } from './dis-left-inputs.js';
import { countChecks, getUser } from '../common/utils.js';
import { scrapeArray } from './scrape-array.js';
import { updateScores } from './update-scores.js';
import { calculateSessionScore } from './calc-session-score.js';
import { disableRow } from './disable-row.js';
import { endGame } from './end-game.js';

const modal = document.querySelector('.modal');
const modalConfirm = document.querySelector('.modal-confirm');
const modalCancel = document.querySelector('.modal-cancel');
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
let currentSessionScore = 0;
const endGameButton = document.getElementById('end-game-button');
const diceButton = document.querySelector('input[type=button]');
const allRows = [redRow, yellowRow, greenRow, blueRow];
let disabledCounter = [];
let currentUser = {};
let modalFlag;
currentUser = getUser();

const toggleModal = () => {
    modalFlag = event.target;
    modal.classList.toggle('show-modal');
};

allRows.forEach(row => {
    const newRow = generateAllRows(row.id);
    const disableLabel = document.createElement('label');
    const disableButton = document.createElement('button');
    disableButton.textContent = 'Disable row';
    disableButton.classList.add('disable-button');
    disableButton.id = (row.id + '-disable-button');
    disableButton.addEventListener('click', toggleModal);
    disableLabel.appendChild(disableButton);
    newRow.push(disableLabel);
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

        if (array.length > 4) {
            if (arrayChecks >= 5) {
                array[10].children[0].removeAttribute('disabled', true);
            }
            if (array[10].children[0].checked === true) {
                array[11].children[0].checked = true;
                disableRow(array);
                if (!disabledCounter.includes(array[0].children[0].className)){
                    disabledCounter.push(array[0].children[0].className);
                }
            }
        }
        countArray.push(arrayChecks);
    });

    const scoreArray = updateScores(countArray);
    
    const sessionScore = calculateSessionScore(scoreArray);
    currentSessionScore = sessionScore;
    

    updateScoresDisplay(scoreArray, sessionScore);
    diceButton.disabled = false;
    
    
    if (countArray[4] === 4 || disabledCounter.length > 1) {
        allColorArrays.forEach(array => {
            disableRow(array);
        });
    }
};

const endGameClick = () => {
    endGame(currentUser.name, currentSessionScore);
};

modalConfirm.addEventListener('click', () => {
    for (let i = 0; i < 13; i++){
        modalFlag.parentElement.parentElement.children[i].children[0].setAttribute('disabled', true);
    }
    disabledCounter.push(modalFlag.id);
    toggleModal();
});
modalCancel.addEventListener('click', toggleModal);

confirmButton.addEventListener('click', confirmClick);
endGameButton.addEventListener('click', endGameClick);