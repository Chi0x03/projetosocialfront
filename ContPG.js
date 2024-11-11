document.addEventListener("DOMContentLoaded", function() {
    let countdownImages = [
        document.getElementById('number-3'),
        document.getElementById('number-2'),
        document.getElementById('number-1')
    ];

    let currentIndex = 0;

    function showNextImage() {
        if (currentIndex > 0) {
            countdownImages[currentIndex - 1].style.opacity = '0'; // Esconde a imagem anterior
        }

        if (currentIndex < countdownImages.length) {
            countdownImages[currentIndex].style.opacity = '1'; // Mostra a próxima imagem
            currentIndex++;
        } else {
            window.location.href = "pag_questao.html"; // Redireciona após a contagem
        }
    }

    setInterval(showNextImage, 1000); // Troca a imagem a cada 1 segundo
});
