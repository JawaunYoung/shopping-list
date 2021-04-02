
windows.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");
    form.addEventListener("submit",  (event) => {
        handleItemForm ();
    });
}

function handleItemForm (event, formRef ) {
    if (event.PreventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    addItemToShoppingList();

    return false;
}
    function addItemToShoppingList() {
        let itemName = document.getElementById("item-name");
        let itemAmount = document.getElementById("item-amount");
        let id = getRandomint(0, 10000000);


        let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
        console.log("Item HTML: ",  itemHtml);
        let itemListRef = document.getElementById("shopping-list");
        itemListRef.insertAdjacentHTML("afterend", itemHtml);

        setDeleteButtonEvent(id)
    }

  function setDeleteButtonEvent(i) {
    let deleteButton = document.getElementById("button"+ id);
    deleteButton.addEventListener("click", () => {
        console.log("DeleteButton Works");
      })

  }

    function createListItem (itemName, itemAmount, id) {
        return `<li id="items${id}">
                    ${ItemName} - ${itemAmount}
                    <button id="button${id}" type="button">Delete Item</button>
                </li>  `;
    }

    function getRandomint(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}