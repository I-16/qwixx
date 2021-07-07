import { generateRow } from './row-gen.js';
import { countChecks } from '../common/utils.js';

export const generateAllRows = (rowId) => {
    const sanitizedRowId = rowId.replace('-row', '');
    const rowBoxes = [];

    // yseah, these magic numbers should be constants
    for (let i = 0; i < 12; i++) {
        const row = generateRow(sanitizedRowId, i);
        rowBoxes.push(row);
    }

    rowBoxes[10].firstElementChild.setAttribute('disabled', true);
    rowBoxes[11].firstElementChild.setAttribute('disabled', true);

    rowBoxes.forEach(box => {
        box.firstElementChild.addEventListener('change', () => {
            if (countChecks(rowBoxes) === 5) {
                rowBoxes[10].firstElementChild.removeAttribute('disabled', true);
            }
            if (countChecks(rowBoxes) < 5) {
                rowBoxes[10].firstElementChild.setAttribute('disabled', true);
            }
        });
    });


    rowBoxes[10].firstElementChild.addEventListener('change', () => {
        let flag;
        flag = event.target.checked;
        // I'd like to see this value stored in a nicely-named variable
        event.target.parentElement.nextSibling.firstElementChild.checked = flag;
    });

    return rowBoxes;
};