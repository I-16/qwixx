
const userSignUp = document.getElementById('user-sign-up');

function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        sessionScore: 0,
    };
    return user;
}

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const userFormData = new FormData(userSignUp);

    const player = makeUser(userFormData);

    saveUser(player);

});