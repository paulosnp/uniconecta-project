// Espera o documento carregar para executar o script
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos das abas e formulários
    const tabLogin = document.getElementById("tab-login");
    const tabRegister = document.getElementById("tab-register");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // Seleciona os elementos do formulário de registro
    const userTypeSelect = document.getElementById("reg-tipo");
    const studentFields = document.getElementById("estudante-fields");
    const communityFields = document.getElementById("comunidade-fields");

    // --- Lógica das Abas ---

    // Evento ao clicar na aba de Login
    tabLogin.addEventListener("click", () => {
        // Ativa a aba de login
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");

        // Mostra o formulário de login
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    });

    // Evento ao clicar na aba de Cadastro
    tabRegister.addEventListener("click", () => {
        // Ativa a aba de cadastro
        tabRegister.classList.add("active");
        tabLogin.classList.remove("active");

        // Mostra o formulário de cadastro
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
    });

    // --- Lógica do Formulário de Registro ---

    // Evento ao mudar o tipo de usuário (RF01, RF02)
    userTypeSelect.addEventListener("change", () => {
        const selectedType = userTypeSelect.value;

        if (selectedType === "estudante") {
            studentFields.style.display = "block";
            communityFields.style.display = "none";
        } else if (selectedType === "comunidade") {
            studentFields.style.display = "none";
            communityFields.style.display = "block";
        } else {
            // Esconde ambos se "Selecione..." for escolhido
            studentFields.style.display = "none";
            communityFields.style.display = "none";
        }
    });

    // --- Simulação de Envio ---
    // (O envio real precisaria de um backend)

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        alert("Simulando login... (RF03)");
        // Em um projeto real, aqui você faria uma chamada (fetch) para a API
        // E, se o login for bem-sucedido, redirecionaria para o dashboard (RF08)
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        alert("Simulando cadastro de novo usuário...");
        // Em um projeto real, aqui você faria uma chamada (fetch) para a API
        // para criar o novo usuário.
    });
});