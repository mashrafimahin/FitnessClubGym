// get data from document
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const miniBoxes = document.querySelectorAll('.miniBox');
const slider = document.querySelector('.slider');

// next button function
nextBtn.addEventListener('click', () => {
    //add active class
    document.querySelector('.slider .miniBox').classList.add('activeMiniBox');
    // append first child to last
    setTimeout(() => {
        slider.append(document.querySelector('.slider .miniBox'))
    }, 600)
    // remove active class
    setTimeout(() => {
        document.querySelector('.slider .miniBox:nth-last-child(1)').classList.remove('activeMiniBox');
    }, 800)
})

// previous button function 
prevBtn.addEventListener('click', () => {
    // add active class to last child
    document.querySelector('.slider .miniBox:nth-last-child(1)').classList.add('activeMiniBox');
    // add last child to first
    setTimeout(() => {
        slider.prepend(document.querySelector('.slider .miniBox:nth-last-child(1)'))
    }, 100)
    // remove active class
    setTimeout(() => {
        document.querySelector('.slider .miniBox').classList.remove('activeMiniBox')
    }, 200);
})