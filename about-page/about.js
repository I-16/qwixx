const parent = document.getElementById('parent');
const sethFaces = document.querySelectorAll('.seth-face');
const danFaces = document.querySelectorAll('.dan-face');
const benFaces = document.querySelectorAll('.ben-face');
const travisFaces = document.querySelectorAll('.travis-face');
const sethHidden = document.getElementById('hidden-seth');
const danHidden = document.getElementById('hidden-dan');
const benHidden = document.getElementById('hidden-ben');
const travisHidden = document.getElementById('hidden-travis');
const sethHiddenImg = document.getElementById('big-seth');
const danHiddenImg = document.getElementById('big-dan');
const benHiddenImg = document.getElementById('big-ben');
const travisHiddenImg = document.getElementById('big-travis');

let preventMultipleEvents = false;

function animateCSS(element, animationName, callback) { // from animate css docs
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}

const sethReveal = () => {
    if (!preventMultipleEvents) {
        animateCSS('.parent', 'fadeOutDown');
        setTimeout(function(){ parent.style.display = 'none'; }, 1000);
        setTimeout(function(){ sethHidden.style.display = 'block'; }, 1100);
        setTimeout(function(){ animateCSS('#hidden-seth', 'rotateInDownLeft'); }, 1100);
        preventMultipleEvents = true;
    }
};
const sethConceal = () => {
    animateCSS('#hidden-seth', 'zoomOutLeft');
    setTimeout(function(){ sethHidden.style.display = 'none'; }, 800);
    setTimeout(function(){ parent.style.display = 'grid'; }, 1000);
    setTimeout(function(){ animateCSS('.parent', 'zoomIn'); }, 1000);
    preventMultipleEvents = false;
};

const danReveal = () => {
    if (!preventMultipleEvents) {
        animateCSS('.parent', 'fadeOutDown');
        setTimeout(function(){ parent.style.display = 'none'; }, 1000);
        setTimeout(function(){ danHidden.style.display = 'block'; }, 1100);
        setTimeout(function(){ animateCSS('#hidden-dan', 'rotateInUpRight'); }, 1100);
        preventMultipleEvents = true;
    }
};
const danConceal = () => {
    animateCSS('#hidden-dan', 'zoomOutLeft');
    setTimeout(function(){ danHidden.style.display = 'none'; }, 800);
    setTimeout(function(){ parent.style.display = 'grid'; }, 1000);
    setTimeout(function(){ animateCSS('.parent', 'zoomIn'); }, 1000);
    preventMultipleEvents = false;
};

const benReveal = () => {
    if (!preventMultipleEvents) {
        animateCSS('.parent', 'fadeOutDown');
        setTimeout(function(){ parent.style.display = 'none'; }, 1000);
        setTimeout(function(){ benHidden.style.display = 'block'; }, 1100);
        setTimeout(function(){ animateCSS('#hidden-ben', 'rotateInDownRight'); }, 1100);
        preventMultipleEvents = true;
    }
};

const benConceal = () => {
    animateCSS('#hidden-ben', 'zoomOutRight');
    setTimeout(function(){ benHidden.style.display = 'none'; }, 800);
    setTimeout(function(){ parent.style.display = 'grid'; }, 1000);
    setTimeout(function(){ animateCSS('.parent', 'zoomIn'); }, 1000);
    preventMultipleEvents = false;
};

const travisReveal = () => {
    if (!preventMultipleEvents) {
        animateCSS('.parent', 'fadeOutDown');
        setTimeout(function(){ parent.style.display = 'none'; }, 1000);
        setTimeout(function(){ travisHidden.style.display = 'block'; }, 1100);
        setTimeout(function(){ animateCSS('#hidden-travis', 'rotateInUpLeft'); }, 1100);
        preventMultipleEvents = true;
    }
};

const travisConceal = () => {
    animateCSS('#hidden-travis', 'zoomOutRight');
    setTimeout(function(){ travisHidden.style.display = 'none'; }, 800);
    setTimeout(function(){ parent.style.display = 'grid'; }, 1000);
    setTimeout(function(){ animateCSS('.parent', 'zoomIn'); }, 1000);
    preventMultipleEvents = false;
};

sethFaces.forEach(function(item){
    item.addEventListener('click', sethReveal);
});

danFaces.forEach(function(item){
    item.addEventListener('click', danReveal);
});

benFaces.forEach(function(item){
    item.addEventListener('click', benReveal);
});

travisFaces.forEach(function(item){
    item.addEventListener('click', travisReveal);
});

sethHiddenImg.addEventListener('click', sethConceal);
danHiddenImg.addEventListener('click', danConceal);
benHiddenImg.addEventListener('click', benConceal);
travisHiddenImg.addEventListener('click', travisConceal);

/*
on conceal - parent.setAttribute(visibility none)
remove attribute from 


*/