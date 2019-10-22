export const calculateSessionScore = (updateScoreArray) => {
    let sessionScoreOutput = 0;
    
    for (let i = 0; i < updateScoreArray.length; i++) {
        sessionScoreOutput += updateScoreArray[i];
    }

    return sessionScoreOutput;
};