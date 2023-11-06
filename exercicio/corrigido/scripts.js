document.addEventListener("DOMContentLoaded", function () { 
    // Event listener for Close Submenu
    document.addEventListener('keydown', (event) => {

        if (event.keyCode === 13) {
            const element = event.target.closest('.has-submenu');
            element.classList.add('active');
        }
    });
});