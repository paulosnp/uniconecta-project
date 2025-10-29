/* /assets/js/auth.js */

// Espera o conteúdo da página carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Procura pelo formulário de login na página
    const loginForm = document.getElementById("login-form");

    // Se o formulário de login existir...
    if (loginForm) {
        
        // Adiciona um "ouvinte" para o evento de 'submit' (envio)
        loginForm.addEventListener("submit", function(event) {
            
            // 1. Previne o comportamento padrão do formulário
            //    (que é recarregar a página)
            event.preventDefault(); 
            
            console.log("Login simulado com sucesso!");

            // 2. Redireciona o usuário para o dashboard
            //    Como login.html e dashboard.html estão na mesma pasta "pages",
            //    só precisamos do nome do arquivo.
            window.location.href = "dashboard.html";
        });
    }
});