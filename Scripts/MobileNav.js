const mobileNavigation = document.body.querySelector('.mobileNavigation');

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('startMobile')) {
        mobileNavigation.classList.add('clicked');
    }
})

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('closeIcon')) {
        mobileNavigation.classList.remove('clicked');
    }
})