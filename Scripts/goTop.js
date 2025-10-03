const goTop = document.querySelector('#goTop');

// function for go top button
goTop.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 500);
});

// auto hide/show functionality
window.addEventListener('scroll' , () => {
    if (window.scrollY > 100) {
        goTop.classList.add('goTopActive')
    }
    else goTop.classList.remove('goTopActive')
})
