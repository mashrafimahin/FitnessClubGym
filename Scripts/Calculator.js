const counters = document.querySelectorAll('.product-count');
let values = Array(counters.length).fill(1);


counters.forEach((counter, index) => {
    const buttons = counter.querySelectorAll('button');
    const display = counter.querySelector('p');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('inrement')) {
                values[index]++;
            } else if (btn.classList.contains('decrement')) {
                values[index]--;
            }
            
            if (values[index] < 1) values[index] = 1;
            
            display.textContent = values[index];
        });
    });
});