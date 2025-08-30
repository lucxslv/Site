// Função para contar o tempo desde a data em que se conheceram
function startTimer() {
    const startDate = new Date('2025-04-16'); // Insira a data em que se conheceram
    const timerElement = document.getElementById('timer-text');

    function updateTimer() {
        const currentDate = new Date();
        const diff = currentDate - startDate;

        // Calculando os dias, horas, minutos e segundos
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Atualizando o texto com o formato: "X dias, Y horas, Z minutos, W segundos"
        timerElement.textContent = `Amo nossa amizade desde de ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos!`;
    }

    updateTimer();
    setInterval(updateTimer, 1000); // Atualiza a cada segundo
}

// Inicia o temporizador
startTimer();

// Função para o slider de fotos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slide-container');

function changeSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[currentSlide].classList.add('active');

    // Move a "slide-container" para exibir a próxima imagem
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(changeSlide, 3000); // Muda a imagem a cada 3 segundos
changeSlide(); // Inicia com a primeira imagem

// Inicia o temporizador
startTimer();
