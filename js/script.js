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

    if (currentSlide === 0) {
        location.reload(); // Recarrega a página ao voltar ao primeiro slide
    } else {
        showSlide(currentSlide);
        let intervalTime = currentSlide === 0 ? 120000 : 60000;
        setTimeout(nextSlide, intervalTime);
    }
}

function startSlideShow() {
    showSlide(currentSlide); 
    setTimeout(nextSlide, 120000); // 2 minutos no primeiro slide antes de trocar
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
