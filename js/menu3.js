function addItem() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value.trim();

    // Validate input field
    if (inputValue === "") {
        alert("Please enter a value!");
        return;
    }

    // Create a new item
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    

    // Set up the item content
    newItem.innerHTML = `
        <span>${inputValue}</span>
        <button class="delete-icon" onclick="deleteItem(this)"><img src="./assets/delete.png" width="15px" height="15px" /></button>
    `;

    // Append the new item to the list
    itemList.appendChild(newItem);

    // Reset the input field
    inputField.value = "";
}

function deleteItem(button) {
    const item = button.parentElement;
    item.remove();
}
