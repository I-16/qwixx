function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        sessionScore: 0,
    };
    return user;
}

const makeNewUser = (formdata) => ({
    name: formdata.get('user-name'),
    sessionScore: 0
});

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const userFormData = new FormData(userSignUp);

    const player = makeUser(userFormData);

    saveUser(player);

});