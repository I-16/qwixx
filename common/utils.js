export function countChecks(checkboxArray) {
    //accepts an array of
    let checksCounted = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i].children[0].checked === true) {
            checksCounted++;
        }
    }
    return checksCounted;
}

export function scoreColor(colorChecksCounted) {
    //accepts the output of countChecks applied to a color row's inputs.
    //returns the total player's score for that color.
    let rowScore = 0;
    for (let i = 1; i < (colorChecksCounted + 1); i++) {
        rowScore = rowScore + i;
    }
    return rowScore;
}

export function scorePenalties(penaltyChecksCounted) {
    //accepts the output of countChecks applied to the penalty box inputs.
    //returns the total score for a player's penalties.
    const penaltyScore = (penaltyChecksCounted * 5);
    return penaltyScore;
}

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function saveHighScore(high) {
    const json = JSON.stringify(high);
    localStorage.setItem('high', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function getHighScore() {
    const json = localStorage.getItem('high');
    if (!json) return null;
    const high = JSON.parse(json);
    return high;
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        sessionScore: 0,
    };
    return user;
}

export function makeHighScore(userName, userScore) {
    const high = {
        name: userName,
        sessionScore: userScore,
    };
    return high;
}
