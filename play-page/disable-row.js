export const disableRow = (array) => {
    array.forEach(item => {
        item.firstElementChild.setAttribute('disabled', true);
    });
};