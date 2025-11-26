# 🚀 Visualizador de Usuário GitHub

Uma aplicação web para consultar perfis e repositórios públicos do GitHub, feita com JavaScript (ES6+), HTML e CSS.

## ✨ Funcionalidades

- 🔎 Busca de usuários do GitHub em tempo real
- 👤 Exibição de avatar, nome, bio, seguidores e seguindo
- 📂 Listagem dos repositórios públicos com:
  - Nome (link direto para o GitHub)
  - Forks, estrelas, watchers e linguagem principal
- ⌨️ Pesquisa via botão ou tecla Enter
- 💎 Interface responsiva e estilizada

## 🖥️ Demonstração

![Interface](./src/img/img%20readme/interface.png)
![busca](./src/img/img%20readme/busca1.png)
![repositórios](./src/img/img%20readme/repositórios.png)

## 🚦 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Digite o nome de usuário do GitHub e pressione Enter ou clique em "Buscar".

## 🗂️ Estrutura dos arquivos

- `src/js/index.js`: Lida com eventos de busca e orquestra as chamadas.
- `src/js/api.js`: Faz as requisições à API do GitHub.
- `src/js/ui.js`: Renderiza o HTML do perfil e dos repositórios.
- `src/css/styles.css`: Estilos da interface.
- `src/img/img_readme`: Pasta com imagens da interface.

## Observações

- O projeto utiliza apenas JavaScript, HTML e CSS, sem frameworks.
- As requisições são feitas diretamente para a [API pública do GitHub](https://api.github.com).

---

Desenvolvido para fins de estudo e prática de consumo de APIs e manipulação de DOM.