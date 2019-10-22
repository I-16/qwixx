export const scrapeArray = (colorDomArray) => {
    let domArray = [];

    colorDomArray.forEach(item => {
        domArray.push(item);
    });

    return domArray;
};