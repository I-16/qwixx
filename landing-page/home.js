import { makeUser, saveUser } from '../common/utils.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const userFormData = new FormData(userSignUp);

    const player = makeUser(userFormData);

    saveUser(player);

});