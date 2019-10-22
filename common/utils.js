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
