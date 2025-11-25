// Renderiza mensagem de carregando
export function renderLoading(container) {
    container.innerHTML = '<p>Carregando...</p>';
}

// Renderiza mensagem de erro
export function renderError(container, message) {
    container.innerHTML = '';
    alert(message);
}

// Renderiza o perfil e os repositórios
export function renderProfile(container, userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank">
        <div class="repo-card">
            <div class="repo-title"> ${repo.name} </div>
            <div class="repo-badges">
                <div class="repo-badge">🍴 Forks: ${repo.forks_count}</div>
                <div class="repo-badge">⭐ Stars: ${repo.stargazers_count}</div>
                <div class="repo-badge">👀 Watchers: ${repo.watchers_count}</div>
                <div class="repo-badge">💻 Linguagem: ${repo.language || 'Não Informado'}</div>
            </div>
        </div>
    </a>
    `).join('') : `<p> Este usuário não possui repositórios públicos.</p>`;

    container.innerHTML = `
        <div class="profile-card">

            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
            <h2>${userData.name || userData.login}</h2>
            <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>

        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4> Seguidores 👥 </h4>   
                <span> ${userData.followers} </span>
            </div>
            <div class="following">
                <h4> Seguindo 👥 </h4>
                <span> ${userData.following} </span>
            </div>
        </div>
        <div class="tittle-repos"> 
             <h2> 📃 Repositórios </h2> 
        </div>
        <div class="repositories">
            ${repositoriesHTML}
        </div>
    `;
}

