document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos do menu do usuário
    const userAvatar = document.getElementById("user-avatar");
    const userDropdown = document.getElementById("user-dropdown");

    // Evento de clique no avatar do usuário
    userAvatar.addEventListener("click", function(event) {
        // Alterna a classe 'show' no dropdown
        userDropdown.classList.toggle("show");
        
        // Impede que o clique se propague para o 'window'
        event.stopPropagation();
    });

    // Evento de clique fora do menu para fechá-lo
    window.addEventListener("click", function(event) {
        // Se o dropdown estiver aberto e o clique for fora dele
        if (userDropdown.classList.contains("show")) {
            userDropdown.classList.remove("show");
        }
    });

});