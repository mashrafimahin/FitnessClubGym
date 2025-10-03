// export-import
import { fecthFromLocal } from "./FetchData.js";

// sticky nav bar 
const header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('headerActive' , window.scrollY > header.clientHeight)
})

// cart menu activate 
const cart = document.querySelector('.cart');
const openCart = document.querySelector('.counting');

// open shopping cart by clicking btn
openCart.addEventListener('click' , () => {
    cart.classList.add('cartActive');
})

// Product filtering
const previewClose = document.querySelector('#previewClose');
const searchBtn = document.querySelector('#searchBtn');
const searchProduct = document.querySelector('#searchProduct');

// open product page
searchBtn.addEventListener('click', () => {
    setTimeout(() => {
        previewClose.parentElement.classList.add('activate');
    }, 200);
    fecthFromLocal(searchProduct.value);
})

// opnen by clicking enter button
searchProduct.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) {
        setTimeout(() => {
            previewClose.parentElement.classList.add('activate');
        }, 200);
        fecthFromLocal(searchProduct.value);
    }
})

// close product page
previewClose.addEventListener('click', () => {
    setTimeout(() => {
        previewClose.parentElement.classList.remove('activate');
    }, 200)
})