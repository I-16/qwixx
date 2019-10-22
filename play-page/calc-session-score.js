export const calculateSessionScore = (updateScoreArray) => {
    let sessionScoreOutput = 0;
    
    for (let i = 0; i < updateScoreArray.length - 1; i++) {
        sessionScoreOutput += updateScoreArray[i];
    }

    sessionScoreOutput -= updateScoreArray[4];

    return sessionScoreOutput;
};