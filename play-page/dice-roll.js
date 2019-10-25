const diceButton = document.querySelector('input[type=button]');
diceButton.addEventListener('click', function() { rollDice();playAudio(); });

const rollDice = function() {
    let i,
        faceValue,
        output = '',
        diceCount = 6;
    let color = 'w';
    // Index 0 and 1 are white dice, 2 is red, 3 is yellow, 4 is green and 5 is blue
    let diceRollArray = [];
    for (i = 0; i < diceCount; i++) {
        switch (i) {
            case 0:
                color = 'w';
                break;
            case 1:
                color = 'w';
                break;
            case 2:
                color = 'r';
                break;
            case 3:
                color = 'y';
                break;
            case 4:
                color = 'g';
                break;
            case 5:
                color = 'b';
                break;
        }
        faceValue = (Math.floor(Math.random() * 6) + 1); //shift the range to 1-6
        output += '<img src="../assets/dice-faces/' + color + faceValue + '.png">';
        diceRollArray.push(faceValue);
    }
    document.getElementById('dice-display').innerHTML = output;
    faceValue++;
    diceButton.disabled = true;
    return diceRollArray;
};

const playSound = document.getElementById('rollDiceAudio'); 

function playAudio() { 
    playSound.play(); 
} 

