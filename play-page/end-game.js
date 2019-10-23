import { saveUser } from '../common/utils.js';

export const endGame = (userName, userSessionScore) => {
    const user = {
        name: userName,
        sessionScore: userSessionScore,
    };

    saveUser(user);

    window.location.assign('../results-page/index.html');
};