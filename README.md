# 🚀 UniConecta - Protótipo de Frontend

![Status](https://img.shields.io/badge/Status-Prot%C3%B3tipo_Frontend-blue)
![Tecnologia](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tecnologia](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tecnologia](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[cite_start]Este repositório contém o protótipo de frontend navegável para o projeto **UniConecta**, desenvolvido como parte da 2ª Semana de Extensão (SEMEX)[cite: 4].

## 🎯 O Projeto

[cite_start]UniConecta é uma plataforma web que visa conectar estudantes universitários em formação a pessoas e organizações que necessitam de soluções simples (como orientações, pequenos serviços, reforço escolar, etc.)[cite: 11].

### O Problema
[cite_start]Estudantes universitários frequentemente enfrentam dificuldade em obter experiência prática durante sua formação, limitando-se ao ambiente teórico[cite: 8]. [cite_start]Ao mesmo tempo, a comunidade (ONGs, pequenos negócios, pessoas físicas) possui demandas simples que não justificam a contratação de profissionais caros[cite: 9].

### A Solução
[cite_start]A plataforma promove a troca de conhecimento e a prática profissional, permitindo que estudantes apliquem seus conhecimentos em demandas reais, sejam elas voluntárias ou remuneradas[cite: 11, 14].

## ✨ Funcionalidades Principais (Visão do Projeto)

* [cite_start]**Conexão Inteligente:** Cadastro de estudantes e comunidade, segmentado por áreas de atuação[cite: 13].
* [cite_start]**Oportunidades:** Oferta de trabalhos pagos e voluntários[cite: 14].
* [cite_start]**Certificação:** Sistema de registro de horas complementares validado por instituições de ensino[cite: 15].
* [cite_start]**Confiança:** Implementação de mecanismos de avaliação e feedback mútuo[cite: 16].

## 💻 Status Atual: Protótipo de Frontend

Este repositório contém um **protótipo visual e navegável** (mockup de alta fidelidade) de todo o fluxo principal do usuário, construído com HTML, CSS e JavaScript puros.

**O backend (servidor, banco de dados, autenticação) não está implementado.** O login e o envio de formulários são **simulados** com JavaScript para permitir a demonstração do fluxo da aplicação.

### Páginas Construídas
O protótipo inclui as seguintes telas:

1.  **`index.html`**: Página inicial (Landing Page) pública.
2.  **`pages/login.html`**: Página de login.
3.  **`pages/cadastro.html`**: Página de cadastro com seleção de tipo de usuário (Estudante/Comunidade).
4.  **`pages/dashboard.html`**: Painel principal do usuário logado (RF08).
5.  **`pages/projetos.html`**: Página de busca e filtragem de projetos (RF09).
6.  **`pages/novo-projeto.html`**: Formulário para a comunidade publicar uma nova demanda (RF07).
7.  **`pages/projeto-detalhe.html`**: Sala do projeto, com simulação de chat, arquivos e ações (RF11, RF12).
8.  **`pages/perfil.html`**: Página de edição de perfil, habilidades e histórico (RF05, RF06).

## 🛠️ Tecnologias Utilizadas (Neste Protótipo)

* **HTML5 Semântico:** Estrutura de todas as páginas.
* **CSS3 (Moderno):** Estilização completa utilizando:
    * Variáveis CSS (Custom Properties) para um design consistente (cores, fontes).
    * Flexbox e Grid Layout para layouts responsivos.
    * Arquitetura de CSS Global (`style.css`) + Específico (ex: `login.css`, `dashboard.css`).
* **JavaScript (Vanilla):** Usado para simular o login (redirecionamento) e o envio de formulários, permitindo a navegação completa do protótipo para demonstrações.

### Stack Tecnológica Proposta (Documento Original)
[cite_start]O documento de arquitetura do projeto sugeriu o uso das seguintes tecnologias para a versão final[cite: 199]:
* **Frontend:** React + Next.js + TailwindCSS
* **Backend:** Node.js + Express
* **Banco de Dados:** SQLite (inicial) / PostgreSQL (avançado)
* **Testes:** Playwright / Jest

## ▶️ Como Executar o Protótipo

Como este é um projeto de frontend estático, você não precisa de um servidor.

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```
2.  **Abra o projeto:**
    Navegue até a pasta do projeto e abra o arquivo `index.html` no seu navegador de preferência.

3.  **Teste o Fluxo (Simulado):**
    * Você pode navegar pela `index.html`.
    * Clique em "Login" ou "Cadastre-se".
    * Na página de `login.html`, preencha qualquer dado e clique em "Entrar". O JavaScript irá redirecioná-lo para o `dashboard.html`.
    * A partir do dashboard, você pode navegar por todas as outras páginas do fluxo logado.

## 👥 Equipe (Projeto Original - 2ª SEMEX)
* Deivid Gonçalves
* Henrique de Albuquerque
* Henrique Fernandes
* Herbert Lira
* João Pedro
* Paulo Ricardo
* Vanessa Vitória
* Lucas Honorato
