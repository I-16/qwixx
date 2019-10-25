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
    animateCSS('.parent', 'fadeOutDown');
    setTimeout(function(){ parent.style.display = 'none'; }, 1000);
    setTimeout(function(){ sethHidden.style.display = 'block'; }, 1100);
    setTimeout(function(){ animateCSS('#hidden-seth', 'rotateInDownLeft'); }, 1100);
    setTimeout(function(){ sethHidden.classList.add('animated rotateInDownLeft'); }, 1100);
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
});

danFaces.forEach(function(item){
    item.addEventListener('mouseover', danReveal);
});

benFaces.forEach(function(item){
    item.addEventListener('mouseover', benReveal);
});

travisFaces.forEach(function(item){
    item.addEventListener('mouseover', travisReveal);
});

sethHiddenImg.addEventListener('mouseout', sethConceal);
danHiddenImg.addEventListener('mouseout', danConceal);
benHiddenImg.addEventListener('mouseout', benConceal);
travisHiddenImg.addEventListener('mouseout', travisConceal);

/*
on conceal - parent.setAttribute(visibility none)
remove attribute from 


*/