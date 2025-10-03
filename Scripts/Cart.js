// product div data collecting
const btns = document.querySelectorAll('.addCart');
const crossBtn = document.querySelector('#closeCart');
const priceField = document.body.querySelector('.totalPrice');

// close cart menu 
crossBtn.addEventListener('click', () => {
    crossBtn.parentElement.parentElement.classList.remove('cartActive')
})

// get data from cart
const list = document.querySelector('.list');

// numbers of item inside cart
const cartItem = document.querySelector('.counting p');
let  item_number = 0;

// function to count the numbers of list
function Counting() {
    item_number = list.children.length; 
    cartItem.textContent = item_number;
}

// store product records which are added to cart
let record = JSON.parse(localStorage.getItem('record')) || [];

// add items to cart function
function Cart(event) {
    // validation
    if (!event.classList.contains('addCart')) return;
    
    // find parent container dynamically
    let parent = event.closest('.miniBox') || event.closest('.ShoppingPart');

    let product_image = parent.querySelector('img');
    let product_name  = parent.querySelector('h1, h2, h3').textContent;
    let product_price = parent.querySelector('p').textContent;
    let product_count = parent.querySelector('.product-count p') 
                        ? parent.querySelector('.product-count p').textContent 
                        : 1;

    // Name in lower Case
    let inLowerCase = product_name.toLowerCase();
    
    // Product Validation
    if (record.includes(inLowerCase)) {
        alert('alreday added');
        return
    }

    // save data to records
    record.push(inLowerCase);
    localStorage.setItem('record', JSON.stringify(record));

    // send data to storage function
    let patternFunction = storePattern(product_image.src, product_name, product_price, product_count);
    Storage(product_name, patternFunction);

    // make pattern
    let pattern = 
    `<div class="list-item">
        <div class="image">
            <img src="${product_image.src}" alt="item" draggable="false">
        </div>
        <div class="info">
            <h3>${product_name}</h3>
            <p id="selectedProducts">x ${parseInt(product_count)}</p>
        </div>
        <div class="delete">
            <button><img src="../Icons/trash.png"></button>
        </div>
    </div>`
    
    // add data inside HTML
    list.insertAdjacentHTML('beforeend', pattern)
    
    // refresh counting function 
    Counting()
    printPrice()
        
    // add data to deleteItem variables
    const deleteItem = list.querySelectorAll('.list-item .delete button');
    
    // clear a item from cart
    deleteItem.forEach(del => {
        del.addEventListener('click', (e) => Delete(e.target))
    })
}

// clear a item from cart
function Delete(event) {
    // targeted product name
    let current_name = event.parentElement.parentElement.querySelector('.info h3').textContent;
    let key = current_name.toLowerCase();

    // filter from record
    record = record.filter(item => item !== key);

    // update localStorage
    localStorage.setItem('record', JSON.stringify(record));
    localStorage.removeItem(key);

    // remove from DOM
    event.parentElement.parentElement.remove();

    // refresh UI
    Counting();
    printPrice();
}

// run add to cart function on button click
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('addCart')) {
        Cart(e.target);
    }
});


// Storage Data
function storePattern(imageSource, name, price, quantity) {
    return {
        product_image: imageSource,
        product_name: name,
        product_price: parseFloat(price.replace(/[^\d.]/g, "")),
        product_quantity: Number(quantity)
    }
}

// set data to storage
function Storage(name, object) {
    // make string data
    let nameString = name.toLowerCase();
    let objectString = JSON.stringify(object);
    // add to storage
    localStorage.setItem(nameString, objectString);
}

// Calculate Price
function Price() {
    let sum = 0;

    for (const item of record) {
        let items = JSON.parse(localStorage.getItem(item));
        if (!items) continue;
        let quantity = items.product_quantity || 1;
        let price = items.product_price || 0;
        sum += quantity * price;
    }

    return sum;
}

// call price in a function
function printPrice() {
    return priceField.textContent = `$${Price()}`;
}

// fetch data from local Storage
function Fetching() {
    // bring data
    let bringRecord = record;
    
    // checkout through each items
    for (const item of bringRecord) {
        // get data
        let dataPack = JSON.parse(localStorage.getItem(item));

        // make pattern
        let dataPattern = 
        `<div class="list-item">
            <div class="image">
                <img src="${dataPack.product_image}" alt="item" draggable="false">
            </div>
            <div class="info">
                <h3>${dataPack.product_name}</h3>
                <p id="selectedProducts">x ${dataPack.product_quantity}</p>
            </div>
            <div class="delete">
                <button><img src="../Icons/trash.png"></button>
            </div>
        </div>`
        
        // add pattern to html
        list.insertAdjacentHTML('beforeend', dataPattern);

        // re-render counter function
        Counting();

        // delete button function
        document.querySelectorAll('.list .list-item .delete button').
        forEach(
            btn => btn.addEventListener('click', (e) => {
                Delete(e.target);
            })
        );
    }

}

// Run function on page load
window.addEventListener('load', () => {
    Fetching();
    printPrice();
})