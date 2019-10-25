const sethFaces = document.querySelectorAll('.seth-face');
const danFaces = document.querySelectorAll('.dan-face');
const benFaces = document.querySelectorAll('.ben-face');
const travisFaces = document.querySelectorAll('.travis-face');

const sethReveal = () => {
    alert('seth');
};
const sethConceal = () => {
    alert('bye');
};

const danReveal = () => {
    alert('dan');
};
const danConceal = () => {
    alert('bye');
};

const benReveal = () => {
    alert('ben');
};

const benConceal = () => {
    alert('bye');
};

const travisReveal = () => {
    alert('travis');
};

const travisConceal = () => {
    alert('bye');
};

sethFaces.forEach(function(item){
    item.addEventListener('mouseover', sethReveal);
    item.addEventListener('mouseout', sethConceal);
});

danFaces.forEach(function(item){
    item.addEventListener('mouseover', danReveal);
    item.addEventListener('mouseout', danConceal);
});

benFaces.forEach(function(item){
    item.addEventListener('mouseover', benReveal);
    item.addEventListener('mouseout', benConceal);
});

travisFaces.forEach(function(item){
    item.addEventListener('mouseover', travisReveal);
    item.addEventListener('mouseout', travisConceal);
});