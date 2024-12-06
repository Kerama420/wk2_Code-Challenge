// Shopping List Array
let shoppingList = [];

// Select DOM Elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const shoppingListContainer = document.getElementById("shoppingList");

// Add item to the list
addButton.addEventListener("click", () => {
    const item = itemInput.value.trim();
    if (item) {
        shoppingList.push({ name: item, purchased: false });
        renderList();
        itemInput.value = ""; // Clear input field
    }
});

// Mark item as purchased
shoppingListContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const index = event.target.dataset.index;
        shoppingList[index].purchased = !shoppingList[index].purchased;
        renderList();
    }
});

// Clear the list
clearButton.addEventListener("click", () => {
    shoppingList = [];
    renderList();
});

// Render the list
function renderList() {
    shoppingListContainer.innerHTML = ""; // Clear current list
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
        listItem.dataset.index = index;
        listItem.className = item.purchased ? "purchased" : "";
        shoppingListContainer.appendChild(listItem);
    });
}
// Save list to local storage
function saveList() {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

// Load list from local storage
function loadList() {
    const savedList = JSON.parse(localStorage.getItem("shoppingList"));
    if (savedList) {
        shoppingList = savedList;
        renderList();
    }
}

// Call loadList on page load
window.addEventListener("DOMContentLoaded", loadList);
listItem.addEventListener("dblclick", () => {
    const newName = prompt("Edit item name:", item.name);
    if (newName) {
        shoppingList[index].name = newName.trim();
        renderList();
    }
});
