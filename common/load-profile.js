import { getUser } from '../data/user-storage.js';

function loadProfile() {
    const name = document.getElementById('user-name');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    
}

export default loadProfile;