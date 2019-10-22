import { getUser, getHighScore, makeHighScore } from '../common/utils.js';

const userNameSpan = document.getElementById('user-name-span');
const userScoreSpan = document.getElementById('user-score-span');
const highScoreNameSpan = document.getElementById('high-score-name-span');
const highScoreScoreSpan = document.getElementById('high-score-score-span');

// retrieve current session score
let sessionData = getUser();
let userName = sessionData.name;
let userScore = sessionData.sessionScore;
let newHighScoreFlag = false;

//if high score is empty, create a new high score
if (getHighScore() === null) {
    let defaultHighScore = makeHighScore(userName, userScore); // make a high score with the key score and the value of an object with the key-values in the parameters
    saveHighScore(defaultHighScore);
    // new high score css flag for Ben's animations
    newHighScoreFlag = true;
}

// retrieve high score
let highScore = getHighScore();
let highScoreUserName = highScore.name;
let highScoreUserScore = highScore.sessionScore;

// compare the two scores, make new high score if this is a new high score
if (highScoreUserScore < userScore) {
    // save user score as the new high score
    let newHighScore = makeHighScore(userName, userScore);
    saveHighScore(newHighScore);
    
    // new high score css flag for ben's animations
    newHighScoreFlag = true;
}

// display user score and high score
userNameSpan.textContent = userName;
userScoreSpan.textContent = userScore;
highScoreNameSpan.textContent = highScoreUserName;
highScoreScoreSpan.textContent = highScoreUserScore;