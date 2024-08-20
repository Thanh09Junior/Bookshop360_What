const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
    if (!myPreloader.style.opacity) {
        myPreloader.style.opacity = 1;
    }
    if (myPreloader.style.opacity > 0) {
        myPreloader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeOutEffect);
    }
}, 200);

window.addEventListener('load', () => {
    fadeOutEffect;
    setTimeout(() => {
        myPreloader.style.display = 'none';
    }, 200); // Ẩn preloader sau 3 giây
});

