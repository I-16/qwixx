import { generateRow } from './row-gen.js';

export const generateAllRows = (rowId) => {
    const sanitizedRowId = rowId.replace('-row', '');
    const rowBoxes = [];

    for (let i = 0; i < 11; i++){
        const row = generateRow(sanitizedRowId, i);
        rowBoxes.push(row);
    }
    
    return rowBoxes;
};

// How do we handle the "lock" (i.e. 12th box)? I think it should be checked for on submit button.