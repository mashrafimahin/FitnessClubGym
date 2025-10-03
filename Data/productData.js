// Store data to local
fetch("Data/data.json").
then(response => response.json()).
then(data => {
    // prevent data from override
    if (!localStorage.getItem('Inventory')) {
        localStorage.setItem('Inventory', JSON.stringify(data));
    }
});