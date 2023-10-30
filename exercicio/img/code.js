
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="radio"]');
    const avancarButton = document.getElementById("avancar");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const checked = document.querySelector('input[type="radio"]:checked');
            avancarButton.disabled = !checked;
        });
    });
});


// Função para abrir a modal quando o botão na classe language-container é clicado
document.getElementById("openModalButton").addEventListener("click", function() {
    document.getElementById("searchModal").style.display = "block";
});

// Função para fechar a modal quando o botão de fechar (imagem) é clicado
document.getElementById("closeModalButton").addEventListener("click", function() {
    document.getElementById("searchModal").style.display = "none";
});
