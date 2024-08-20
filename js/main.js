const heroBg = document.querySelector(".hero");
const header = document.querySelector(".header");

function headerBg() {
    const height = window.scrollY;
    if (height >= 10) {
        header.style.background = "#14141499";
        
    } else {
        header.style.background = "";
    }
}

window.addEventListener('scroll', headerBg);
