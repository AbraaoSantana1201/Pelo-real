// Adiciona um "ouvinte de evento" para a página, que dispara uma função sempre que o usuário rola a tela.
window.addEventListener('scroll', function() {
    // Seleciona o elemento HTML com a classe 'whatsapp-btn', que é o botão flutuante.
    const whatsappButton = document.querySelector('.whatsapp-btn');

    // Verifica se a posição de rolagem vertical da página (window.scrollY)
    // é maior que 300 pixels.
    if (window.scrollY > 300) {
        // Se a rolagem for maior que 300px, altera o estilo do botão para 'flex',
        // tornando-o visível na tela.
        whatsappButton.style.display = 'flex';
    } else {
        // Se a rolagem for menor ou igual a 300px, altera o estilo para 'none',
        // escondendo o botão novamente.
        whatsappButton.style.display = 'none';
    }
});
