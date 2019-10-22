// declare previous stored high score and current session score
let highScore = getHighScore(); // user object - name, sessionScore obj properties
let sessionData = getUser(); // high score object - name, sessionScore obj properties

// compare the two scores, make new high score if this is a new high score
if (highScore.sessionScore < sessionData.sessionScore) {
    
}