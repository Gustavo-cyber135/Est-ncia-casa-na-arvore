/ script.js

window.onload = function() {
    alert("Bem-vindo à Estância Casa da Árvore! Explore nosso site!");
    
    // Efeito de carregamento
    let images = document.querySelectorAll('.galeria .image img');
    
    images.forEach(image => {
        image.onload = function() {
            image.style.opacity = 1;
        }
        image.style.opacity = 0;
    });
}