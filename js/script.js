let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIndicator = document.getElementById('slide-indicator');

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateSlideIndicator(index);
}

// Função para passar para o próximo slide
function nextSlide() {
    currentSlide++;

    // Se retornarmos ao primeiro slide, recarregamos a página
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta ao primeiro slide
        location.reload(); // Recarrega a página
    }

    showSlide(currentSlide);

    // Define o intervalo de tempo entre os slides
    let intervalTime = currentSlide === 0 ? 120000 : 60000; // 2 min para o primeiro, 1 min para os outros
    setTimeout(nextSlide, intervalTime); // Chama a próxima troca de slide
}

// Função para iniciar o slideshow
function startSlideShow() {
    showSlide(currentSlide); // Exibe o primeiro slide imediatamente
    setTimeout(nextSlide, 120000); // Aguarda 2 minutos antes de trocar o primeiro slide
}

setTimeout(startSlideShow, 500); // Inicia o slideshow com um pequeno atraso

// Função para atualizar o relógio
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo

// Função para atualizar o indicador do slide
function updateSlideIndicator(index) {
    slideIndicator.textContent = `Slide ${index + 1} de ${slides.length}`;
}

updateClock(); // Atualiza o relógio imediatamente
updateSlideIndicator(currentSlide); // Atualiza o indicador do slide
