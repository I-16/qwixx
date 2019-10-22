import { generateAllRows } from './gen-all-rows.js';

const redRow = document.getElementById('red-row');
const yellowRow = document.getElementById('yellow-row');
const greenRow = document.getElementById('green-row');
const blueRow = document.getElementById('blue-row');

[redRow, yellowRow, greenRow, blueRow].forEach(row => {
    const newRow = generateAllRows(row.id);
    newRow.forEach(box => {
        row.appendChild(box);
    });
});