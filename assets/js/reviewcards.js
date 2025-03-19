const carousel = document.getElementById("ab-carousel");
    
            const duplicatedCards = [
                carousel.innerHTML,
                carousel.innerHTML,
                carousel.innerHTML
            ].join('');
    
            carousel.innerHTML = duplicatedCards;
    
            let index = 1;
    
            function showSlide() {
                const itemWidth = document.querySelector(".ab-carousel-item").offsetWidth + 30;
                carousel.style.transition = "transform 0.8s ease-in-out";
                carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    
                index++;
    
                if (index >= document.querySelectorAll(".ab-carousel-item").length / 3 * 2) {
                    setTimeout(() => {
                        carousel.style.transition = "none";
                        index = document.querySelectorAll(".ab-carousel-item").length / 3;
                        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
                    }, 100);
                }
            }
    
            setInterval(showSlide, 3000);