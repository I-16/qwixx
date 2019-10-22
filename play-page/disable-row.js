export const disableRow = (array) => {
    array.forEach(item => {
        item.children[0].setAttribute('disabled', true);
    });
};