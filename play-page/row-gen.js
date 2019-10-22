export const generateRow = (rowId, index) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    let spanTextContent;
    input.type = 'checkbox';
    input.classList.add(rowId);
    
    if (rowId === 'red' || rowId === 'yellow'){
        input.id = rowId + (parseInt(index) + 2);
        input.value = parseInt(index) + 2;
        spanTextContent = parseInt(index) + 2;
    } else {
        input.id = rowId + (12 - parseInt(index));
        input.value = 12 - parseInt(index);
        spanTextContent = 12 - parseInt(index);
    }

    if (index === 11) {
        spanTextContent = '';
        span.classList.add('fas', 'fa-lock');
    }

    const spanString = rowId + '-box';

    span.classList.add(spanString);
    span.textContent = spanTextContent;

    label.appendChild(input);
    label.appendChild(span);

    return label;
};