const heroBg = document.querySelector(".heroBg");
const header = document.querySelector(".header");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const firstSlide = document.querySelector(".first-slide");
const lastSlide = document.querySelector(".last-slide");

let currentSlide = 1;
const totalSlides = 3;

function headerBg() {
    const height = window.scrollY;
    if (height >= 10) {
        header.style.background = "#14141499";
    } else {
        header.style.background = "";
    }
}

function updateSlider() {
    firstSlide.textContent = currentSlide;
    heroBg.style.backgroundImage = `url("../images/slider${currentSlide}.png")`
    if (currentSlide <= 1) {
        btnLeft.style.color = "white";
        btnLeft.style.backgroundColor = "rgba(255, 255, 255, 0.637)";
        btnLeft.style.cursor = "not-allowed";
    } else {
        btnLeft.style.color = "";
        btnLeft.style.backgroundColor = "";
        btnLeft.style.cursor = "pointer";
    }

    if (currentSlide >= totalSlides) {
        btnRight.style.color = "white";
        btnRight.style.backgroundColor = "rgba(255, 255, 255, 0.637)";
        btnRight.style.cursor = "not-allowed";
    } else {
        btnRight.style.color = "";
        btnRight.style.backgroundColor = "";
        btnRight.style.cursor = "pointer";
    }
}

btnLeft.addEventListener("click", function () {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlider();
    }
});

btnRight.addEventListener("click", function () {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlider();
    }
});

window.addEventListener('scroll', headerBg);
updateSlider();
