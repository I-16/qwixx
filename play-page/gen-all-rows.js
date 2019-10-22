import { generateRow } from './row-gen.js';

export const generateAllRows = (rowId) => {
    const sanitizedRowId = rowId.replace('-row', '');
    const rowBoxes = [];

    for (let i = 0; i < 12; i++){
        const row = generateRow(sanitizedRowId, i);
        rowBoxes.push(row);
    }

    rowBoxes[10].children[0].setAttribute('disabled', true);
    rowBoxes[11].children[0].setAttribute('disabled', true);

    return rowBoxes;
};