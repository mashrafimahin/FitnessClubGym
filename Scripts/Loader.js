const loader = document.querySelector('.loading');
const content = document.querySelector('main');

// loading component
window.addEventListener('DOMContentLoaded', () => {
    // remove loader
    setTimeout(() => {
        loader.classList.add('gone')
    }, 1600);

    // display main contents
    setTimeout(() => {
        content.classList.add('readyToExplore');
    }, 1550);

    // display none to loader
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2500);
})