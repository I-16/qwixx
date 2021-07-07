import { scoreColor, scorePenalties } from '../common/utils.js';

export const updateScores = ([redCount, yellowCount, greenCount, blueCount, penaltyCount]) => {
    // declare individual scores
    // nice declarative code!
    const firstScore = scoreColor(redCount);
    const secondScore = scoreColor(yellowCount);
    const thirdScore = scoreColor(greenCount);
    const fourthScore = scoreColor(blueCount);
    const penaltyScore = scorePenalties(penaltyCount);

    // push to array and return
    let scoreArray = [firstScore, secondScore, thirdScore, fourthScore, penaltyScore];
    return scoreArray;
};