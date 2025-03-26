document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel__track');
    const slides = document.querySelectorAll('.carousel__slide');
    const dots = document.querySelectorAll('.carousel__dot');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = 100 / slideCount;
    
    // Configurar el ancho del track
    track.style.width = `${slideCount * 100}%`;
    
    // Configurar el ancho de cada slide
    slides.forEach(slide => {
        slide.style.width = `${slideWidth}%`;
    });
    
    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Función para ir al siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
    }
    
    // Función para ir al slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
    }
    
    // Event listeners para los botones
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Event listeners para los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Autoplay
    let autoplayInterval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
    
    // Pausar autoplay cuando el mouse está sobre el carrusel
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Reanudar autoplay cuando el mouse sale del carrusel
    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
}); 