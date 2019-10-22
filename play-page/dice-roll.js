document.querySelector('input[type=button]').addEventListener('click', function(){rollDice();});

const rollDice = function() {
    let i,
        faceValue,
        output = '',
        diceCount = 6;
        // Index 0 and 1 are white dice, 2 is red, 3 is yellow, 4 is green and 5 is blue
    let diceRollArray = [];
    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += '<span class="die">' + '&#x268' + faceValue + ';</span>';
        diceRollArray.push(faceValue + 1);
    }
    document.getElementById('dice-display').innerHTML = output;
    faceValue++;
    return diceRollArray; 
};

// export default rollDice;
