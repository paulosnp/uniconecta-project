/* /assets/js/form.js */

document.addEventListener("DOMContentLoaded", function() {
    
    const projectForm = document.getElementById("form-novo-projeto");

    if (projectForm) {
        
        projectForm.addEventListener("submit", function(event) {
            // Previne o recarregamento da página
            event.preventDefault(); 
            
            // Simula o sucesso
            alert("Projeto publicado com sucesso! (Simulação)");

            // Redireciona para o dashboard
            window.location.href = "dashboard.html";
        });
    }
});