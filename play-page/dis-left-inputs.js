export const disableLeftInputs = (boxArray) => {
    let lastIndex = 0;

    //find the index of the last checked element
    for (let i = 0; i < boxArray.length; i++){
        if (boxArray[i].checked === true){ // can delete if boolean is falsy
            lastIndex = i;
        }
    }

    // go through the array and disable input on all boxes up to box[i]
    for (let i = 0; i <= lastIndex; i++){
        boxArray[i].children[0].setAttribute('disabled', true);
    }
};