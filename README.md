How It Works
Adding an Item
Enter the item name and price in the respective input fields.
Click the "Add" button.
The item appears in the list with the price and a checkbox to mark it as purchased.
Marking as Purchased
Click the checkbox next to an item.
The item is visually updated (strikethrough text).
Unchecking the box will revert the item to its original state.
Clearing the List
Click the "Clear List" button to remove all items.
The list and UI are reset.
Code Highlights
JavaScript (index.js)
State Management:

The application uses an array shoppingList to track items and their states.
Each item has the properties name, price, and purchased.
Dynamic Updates:

The displayItems() function dynamically renders the list based on shoppingList.
Event listeners handle user interactions (e.g., adding, marking as purchased).
Reusable Functions:

togglePurchased(index): Toggles the purchased state of an item.
toggleClearButton(): Shows or hides the "Clear List" button.
