//Tornando input e button funcionais:

const baseUrl = "https://api.github.com/users/";

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {

    const searchTerm = inputSearch.value;

    if (searchTerm) {
        profileResults.innerHTML = '<p>Carregando...</p>'; // Loading message

        try {

            const response = await fetch(`${baseUrl}${searchTerm}`);

            if (!response.ok) {
                profileResults.innerHTML = ''; // Clear loading message
                alert('Usuário não encontrado, verifique o nome do usuário e tente novamente.');
                return;
            }

            const Userdata = await response.json();
            console.log(Userdata); // Apenas para verificar se os dados estão sendo buscados corretamente.
            profileResults.innerHTML = 
            ` <div class="profile-card">

                <img src="${Userdata.avatar_url}" alt="Avatar de ${Userdata.login}" class="profile-avatar">
                <div> 
                    <h2>${Userdata.name}</h2>
                    <p>${Userdata.bio || 'Não possui bio cadastrada 😢.'}</p>
                </div>
            </div> ` 

        } catch (error) {
            profileResults.innerHTML = ''; // Clear loading message
            console.error('Erro ao buscar perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    } else {

        alert('Por favor, insira um nome de usuário do GitHub.');

    }
});










