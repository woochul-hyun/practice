var totalItems = 0;

function renameItem() {
    var newText = prompt("Todo list 수정");
    if (!newText || newText === "" || newText === " ") {
        return false;
    }
    document.getElementById("item_" + totalItems).innerText = newText;
}

function removeItem() {
    var listItemId = this.id.replace("li_", "");
    var removeEle = document.getElementById("li_" + listItemId);
    removeEle.parentNode.removeChild(removeEle);
}

function deleteItem() {
    var listItemId = this.id.replace("removeBtn_" + "");
    var removeEle = document.getElementById("li_" + listItemId);
    removeEle.parentNode.removeChild(removeEle);
}

function updateItemStatus() {
    var chId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + chId);

    if (this.checked) {
        itemText.className = "checked";
    } else {
        itemText.className = "";
    }
}

function addNewItem(list, itemText) {
    totalItems++;

    var date = new Date();
    var id =
        "" +
        date.getHours() +
        date.getMinutes() +
        date.getSeconds() +
        date.getMilliseconds();

    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.className = "listItemClass";
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.id = "cb_" + totalItems;
    checkBox.onclick = moveItem;

    var span = document.createElement("span");
    span.id = "item_" + totalItems;
    span.innerText = itemText;

    var button = document.createElement("button");
    button.id = "editBtn";
    button.value = "edit";
    button.innerText = "Edit";
    button.onclick = renameItem;

    var removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn_" + id;
    removeBtn.className = "removeBtnClass";
    removeBtn.value = "remove";
    removeBtn.innerText = "Remove";
    removeBtn.onclick = deleteItem;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
    listItem.appendChild(removeBtn);
    listItem.appendChild(button);
}

var inputText = document.getElementById("inputText");
inputText.focus();

//var btnNew = document.getElementById("btnAdd");
//btnNew.onclick = function() {
//    var itemText = inputText.value;
//    if (!itemText || itemText === "" || itemText === " ") {
//        return false;
//    }
//    addNewItem(document.getElementById("todolist"), itemText);
//    inputText.focus();
//    inputText.value = null;
//};

inputText.onkeyup = function(event) {
    if (event.which === 13) {
        var itemText = inputText.value;
        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }
        addNewItem(document.getElementById("todolist"), itemText);
        inputText.focus();
        inputText.value = null;
    }
};

var donelist = document.getElementById("donelist");
function moveItem() {
    var listItemId = this.id.replace("cb_", "");
    var listItem = document.getElementById("li_" + listItemId);

    var chId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + chId);

    if (this.checked) {
        itemText.className = "checked";
    } else {
        itemText.className = "";
    }

    var listItemParentId = listItem.parentElement;
    if (listItemParentId == donelist) {
        todolist.appendChild(listItem);
    } else {
        donelist.appendChild(listItem);
    }
}
