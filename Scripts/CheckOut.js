// Select the container where the checkout items will be displayed
const CheckOutContainer = document.querySelector('.product-list-checkOut');

// Select the container where the total amount will be displayed
const TotalAmountContainer = document.querySelector('.total-amount');

// submit button
const submitButton = document.querySelector('.Place-Order');

// Get items on window load
window.onload = () => {
    // Fetch the 'record' array from local storage
    let product_data = JSON.parse(localStorage.getItem('record')) || [];
    let totalAmount = 0;

    // Check if the record array is empty
    if (product_data.length === 0) {
        CheckOutContainer.textContent = 'No Product Selected';
        TotalAmountContainer.textContent = 'Total Amount: $0';
        return;
    }

    // Loop through each item in the 'record' array
    for (const item of product_data) {
        // Fetch the product object from local storage
        let obj = JSON.parse(localStorage.getItem(item));

        // Extract product details
        let prdct_name = obj.product_name;
        let prdct_icon = obj.product_image;
        let prdct_quantity = obj.product_quantity;
        let prdct_price = obj.product_price;

        // Calculate the total price for the current product
        let productTotalPrice = prdct_price * prdct_quantity;
        totalAmount += productTotalPrice;

        // Create the HTML pattern for the product
        let pattern = 
        `<li class="product-item">
            <div class="image">
                <img src="${prdct_icon}" alt="Product_Icon">
            </div>
            <div class="info">
                <h4>${prdct_name}</h4>
                <p>Quantity:  ${prdct_quantity}</p>
                <p>Price:  $${productTotalPrice}</p>
            </div>
        </li>`;

        // Add the product's HTML to the container
        CheckOutContainer.insertAdjacentHTML('beforeend', pattern);
    }

    // Display the total amount
    TotalAmountContainer.textContent = `Total Amount: $${totalAmount}`;
};

// Handle submit button click event
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the name input value
    const nameInput = document.querySelector('.name-input').value;

    if (nameInput.trim() === '') {
        alert('Please enter your name before submitting.');
        return;
    }

    // Set a cookie with the name input value
    document.cookie = `username=${encodeURIComponent(nameInput)}; expires=${60 * 60 * 24 * 7}; path=/`;

    alert('Thank you for your purchase, ' + nameInput + '. Your order has been placed successfully!');

    //clear local storage
    localStorage.clear();

    // go homepage
    window.location.href = '../index.html';
});