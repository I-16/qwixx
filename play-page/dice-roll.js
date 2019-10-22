document.querySelector('input[type=button]').addEventListener('click', function(){rollDice();});

const rollDice = function() {
    let i,
        faceValue,
        output = '',
        diceCount = 6;
        // Index 0 and 1 are white dice, 2 is red, 3 is yellow, 4 is green and 5 is blue
    let resultsArray = [];
    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += '&#x268' + faceValue + '; ';
        resultsArray.push(faceValue + 1);
    }
    document.getElementById('common-die-1').innerHTML = output;
    faceValue++;
    return faceValue;
    
};

export default rollDice;
