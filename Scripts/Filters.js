const closed = document.querySelector('#close');
const opened = document.querySelector('#opendd');
const mainContainer = document.querySelector('.product-filters');
const filteredContainer = document.querySelector('.product-page');

// open and closing the filter tab
opened.addEventListener('click', () => {
    mainContainer.classList.add('opened');
})
closed.addEventListener('click', () => {
    mainContainer.classList.remove('opened');
})

// filtering function
function Filtered(div, input) {
    // checkpoint
    if (!input) return;

    // filtering part
    div.forEach(elm => {
        if (!elm.classList.contains(input)) {
            elm.style.display = 'none';
        } 
        else {
            elm.style.display = 'block';
        }
    });
}

// run filters after window loaded
window.onload = () => {
    let childrens = filteredContainer.querySelectorAll('.ShoppingPart');
    let values = document.querySelectorAll('.product-filters ul li input');
    
    // run function
    values.forEach(btn => {
        btn.addEventListener('change', () => {
            if (btn.checked) {
                // uncheck others
                values.forEach(other => {
                    if (other !== btn) other.checked = false;
                })
                
                // push data with checked input
                Filtered(childrens, btn.value);
            } else {
                childrens.forEach(div => div.style.display = 'block');
            }
        })
    })
}