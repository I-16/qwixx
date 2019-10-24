import { makeUser, saveUser } from '../common/utils.js';

const userSignUp = document.getElementById('user-sign-up');
const clearStorage = document.getElementById('clear-storage');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const userFormData = new FormData(userSignUp);

    const player = makeUser(userFormData);

    saveUser(player);

    window.location = 'play-page';

});

clearStorage.addEventListener('click', function() {
    localStorage.clear();
});


    