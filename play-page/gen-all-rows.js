import { generateRow } from './row-gen.js';
import { countChecks } from '../common/utils.js';
import { disableClick } from '../play-page/play.js';

export const generateAllRows = (rowId) => {
    const sanitizedRowId = rowId.replace('-row', '');
    const rowBoxes = [];

    for (let i = 0; i < 12; i++){
        const row = generateRow(sanitizedRowId, i);
        rowBoxes.push(row);
    }

    rowBoxes[10].children[0].setAttribute('disabled', true);
    rowBoxes[11].children[0].setAttribute('disabled', true);

    rowBoxes.forEach(box => {
        box.children[0].addEventListener('change', () => {
            if (countChecks(rowBoxes) === 5){
                rowBoxes[10].children[0].removeAttribute('disabled', true);
            } 
            if (countChecks(rowBoxes) < 5){
                rowBoxes[10].children[0].setAttribute('disabled', true);
            }
        });
    });
 

    rowBoxes[10].children[0].addEventListener('change', () => {
        let flag;
        flag = event.target.checked;
        event.target.parentElement.nextSibling.children[0].checked = flag;
    }); 

    const disableLabel = document.createElement('label');
    const disableRowButton = document.createElement('button');
    disableRowButton.addEventListener('click', disableClick);
    disableRowButton.id = sanitizedRowId;
    disableLabel.appendChild(disableRowButton);
    rowBoxes.push(disableLabel);

    return rowBoxes;
};