document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".hero-track");
    const slides = document.querySelectorAll(".hero-image");
    const prevButton = document.querySelector(".slider-button.prev");
    const nextButton = document.querySelector(".slider-button.next");
    const slideInterval = 10000;

    if (!track || slides.length === 0 || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = 0;
    let timerId;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    }

    function startAutoSlide() {
        timerId = window.setInterval(function () {
            showSlide(currentIndex + 1);
        }, slideInterval);
    }

    function resetAutoSlide() {
        window.clearInterval(timerId);
        startAutoSlide();
    }

    prevButton.addEventListener("click", function () {
        showSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextButton.addEventListener("click", function () {
        showSlide(currentIndex + 1);
        resetAutoSlide();
    });

    startAutoSlide();
});
