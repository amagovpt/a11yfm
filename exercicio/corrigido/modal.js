document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById('openSearchModalButton');
    const modal = document.getElementById('searchModal');
    const closeButton = document.getElementById('closeSearchModalButton');
    const searchInput = document.getElementById('searchInput');
    const searchform = document.forms['form-search'];

    function openModal() {
        modal.style.display = 'flex';
        searchInput.focus();

        let modalNodes = Array.from(document.querySelectorAll('#searchModal *') );
        nonModalNodes = document.querySelectorAll('body *:not(#searchModal):not([tabindex="-1"])');

        for (let i = 0; i < nonModalNodes.length; i++) {
            let node = nonModalNodes[i];

            if (!modalNodes.includes(node)) {
                node._prevTabindex = node.getAttribute('tabindex');
                node.setAttribute('tabindex', -1);
                node.style.outline = 'none';
            }
        }
    }

    function closeModal() {
        alert('vai fechar...');
        modal.style.display = 'none';

        document.body.style.overflow = null;

        for (let i = 0; i < nonModalNodes.length; i++) {
            let node = nonModalNodes[i];

            if (node._prevTabindex) {
                node.setAttribute('tabindex', node._prevTabindex);
                node._prevTabindex = null;
            } else {
                node.removeAttribute('tabindex');
            }

            node.style.outline = null;
        }

        openButton.focus();
    }
    
    openButton.addEventListener('click', () => {
        openModal();
    });

    
    searchform.addEventListener("submit", function(e) {
        window.location.replace("./pesquisa.html");
        e.preventDefault();
    });
});