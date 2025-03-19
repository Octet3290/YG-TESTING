const carousels = document.querySelectorAll('.carousel-content');
const dotsContainers = document.querySelectorAll('.dots-container');

let indices = Array.from({ length: carousels.length }, () => 0);

function showSlide(carouselIndex, slideIndex) {
    const carousel = carousels[carouselIndex];
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

    const dots = dotsContainers[carouselIndex].querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });

    indices[carouselIndex] = slideIndex;
}

function nextSlide(carouselIndex) {
    const totalSlides = carousels[carouselIndex].children.length;
    const newIndex = (indices[carouselIndex] + 1) % totalSlides;
    showSlide(carouselIndex, newIndex);
}

function prevSlide(carouselIndex) {
    const totalSlides = carousels[carouselIndex].children.length;
    const newIndex = (indices[carouselIndex] - 1 + totalSlides) % totalSlides;
    showSlide(carouselIndex, newIndex);
}

function goToSlide(carouselIndex, slideIndex) {
    showSlide(carouselIndex, slideIndex);
}


setInterval(() => nextSlide(0), 5000);
setInterval(() => nextSlide(1), 6000); 


document.querySelectorAll('.boton.prev').forEach((btn, index) => {
    btn.addEventListener('click', () => prevSlide(index));
});

document.querySelectorAll('.boton.next').forEach((btn, index) => {
    btn.addEventListener('click', () => nextSlide(index));
});

carousels.forEach((_, i) => showSlide(i, 0));
