let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIndicator = document.getElementById('slide-indicator');

// Verifica se a página já foi recarregada
if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true'); // Marca a página como recarregada
    location.reload(); // Recarrega a página uma vez
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateSlideIndicator(index);
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta ao primeiro slide
        showSlide(currentSlide);
    } else {
        showSlide(currentSlide);
    }
    
    let intervalTime = currentSlide === 0 ? 120000 : 60000; // 2 min para o primeiro, 1 min para os outros
    setTimeout(nextSlide, intervalTime);
}

function startSlideShow() {
    showSlide(currentSlide);
    setTimeout(nextSlide, 120000); // Aguarda 2 minutos antes de trocar o primeiro slide
}

setTimeout(startSlideShow, 500);

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
