const baseUrl = "https://api.github.com";


export async function fetchUser (userName) {

    const response = await fetch(`${baseUrl}/users/${userName}`);

    if (!response.ok) {
        console.log('Response not ok:', response.status);

        throw new Error('Usuário não encontrado');
    }

    return await response.json();
}

export async function fetchUserRepos (userName) {

    const response = await fetch(`${baseUrl}/users/${userName}/repos?per_page=10`);
    if (!response.ok) {

       throw new Error ('Repositórios não encontrados');

    }
    return await response.json();

}