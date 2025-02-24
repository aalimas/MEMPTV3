let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIndicator = document.getElementById('slide-indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateSlideIndicator(index);
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        location.reload(); // Recarrega a página quando chega ao fim do ciclo
    } else {
        showSlide(currentSlide);
        let intervalTime = currentSlide === 0 ? 120000 : 60000;
        setTimeout(nextSlide, intervalTime);
    }
}

function startSlideShow() {
    showSlide(currentSlide);
    setTimeout(nextSlide, 120000); // Primeiro slide dura 2 minutos
}

// Recarrega a página ao iniciar para garantir imagens atualizadas
window.onload = function () {
    location.reload();
};

// Inicia a apresentação após o reload
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

