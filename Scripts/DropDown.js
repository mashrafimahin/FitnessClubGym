const targetClass = document.querySelector('#dropdownMenu a');
const btn = document.querySelector('#dropdownMenu a i');
const menu = document.querySelector('.dropDown');

// on mouse over function
targetClass.addEventListener('mouseover' , () => {
    menu.classList.add('dropDownActive')
    btn.classList.add('dropbtnActive')
})

// window clicked and active class removed
window.addEventListener('click' , () => {
    menu.classList.remove('dropDownActive')
    btn.classList.remove('dropbtnActive')
})
