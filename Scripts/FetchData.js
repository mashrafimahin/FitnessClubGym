// container
const container = document.querySelector('.filter-container .preview-content .content');

// product fetch from local storage
export function fecthFromLocal(tag) {
    // clean everything 
    container.innerHTML = null;

    // validation 
    if (!tag) return;

    // set tag
    let productTag = tag.toLowerCase().trim();

    // data
    let data = [...JSON.parse(localStorage.getItem('Inventory'))];

    // filter from storage
    let edited = data.filter(item => item.tag.includes(productTag));

    // pattern
    for (const product of edited) {
        let pattern =
        `<div class="ShoppingPart">
            <img src="${product.link} loading="lazy"">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="addCart">Add to Cart</button>
        </div>`

        // insert to HTML Document
        container.insertAdjacentHTML('beforeend', pattern);
    }
}


// fetching product data for shopping page (automated)
const bigContainer = document.querySelector('.product-page');

// fetch again 
function autoFetch() {
    let data = JSON.parse(localStorage.getItem('Inventory')) || [];

    // add data through loop
    for (const item of data) {
        // take data 
        let product_name = item.name;
        let product_price = item.price;
        let product_image = item.link;

        // pattern 
        let pattern = 
        `<div class="ShoppingPart ${product_name.toLowerCase()}">
            <div class="image">
                <img src="${product_image}" alt="Product_View" />
            </div>
            <h2>${product_name}</h2>
            <p>$${product_price}</p>
            <button class="addCart">Add to Cart</button>
        </div>`

        // add to document
        bigContainer.insertAdjacentHTML('beforeend', pattern);
    }
}

// initialize function
window.addEventListener('DOMContentLoaded', autoFetch);