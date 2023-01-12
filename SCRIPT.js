(function () {

    const slides = document.querySelectorAll('.slide');

    slides[3].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearClass();
            slide.classList.add('active');
        })
    }

    function clearClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }

}) ();