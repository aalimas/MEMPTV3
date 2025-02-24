let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIndicator = document.getElementById('slide-indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateSlideIndicator(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlideShow() {
    showSlide(currentSlide); // Exibe o primeiro slide imediatamente
    setInterval(function() {
        // Ajusta o tempo de exibição do slide
        let intervalTime = currentSlide === 0 ? 120000 : 60000; // 2 min para o primeiro, 1 min para os outros
        setTimeout(nextSlide, intervalTime);
    }, 60000); // Troca a cada 1 min
}

startSlideShow();

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

function updateSlideIndicator(index) {
    slideIndicator.textContent = `Slide ${index + 1} de ${slides.length}`;
}

updateClock();
updateSlideIndicator(currentSlide);
