document.querySelectorAll('#index .list a').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        document.querySelector('#index .active').classList.remove('active');
        elemento.parentElement.classList.add('active');
    });
});