import { fetchUser, fetchUserRepos } from './api.js';
import { renderProfile, renderError, renderLoading } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {

    const userName = inputSearch.value;

    if (!userName) {

        renderError (profileResults, 'Por favor, insira um nome de usuário do GitHub.');
        return;

    }

    renderLoading(profileResults);

    try {

        const userData = await fetchUser(userName);
        const userRepos = await fetchUserRepos(userName);

        renderProfile(profileResults, userData, userRepos);

    }
     catch (error) {

        renderError(profileResults, 'Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');

    }

});

inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btnSearch.click();
    }
});









