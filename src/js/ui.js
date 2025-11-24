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

    const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repo-card">
             <h3>${repo.name}</h3>
            <div class="repo-stats">
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>⭐ Stars: ${repo.stargazers_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Linguagem: ${repo.language || 'Não Informado'}</span>
             </div>
        </div>

    `).join('') : `<p> Este usuário não possui repositórios públicos.</p>`;

    container.innerHTML = `
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
            <div> 
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </> 
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

            <h2> Repositórios </h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        `;
}

