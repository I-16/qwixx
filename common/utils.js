export function countChecks(checkboxArray) {
    let checksCounted = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i].children[0].checked === true) {
            checksCounted++;
        }
    }
    return checksCounted;
}
