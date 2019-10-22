export const generateRow = (rowId, index) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    let spanTextContent;
    input.type = 'checkbox';
    input.classList.add(rowId);
    
    if (rowId === 'red' || rowId === 'yellow'){
        input.id = rowId + (index + 2);
        input.value = index + 2;
        spanTextContent = index + 2;
    } else {
        input.id = rowId + (12 - index);
        input.value = 12 - index;
        spanTextContent = 12 - index;
    }



    const spanString = rowId + '-box';

    span.classList.add(spanString);
    span.textContent = spanTextContent;

    label.appendChild(input);
    label.appendChild(span);

    return label;
};