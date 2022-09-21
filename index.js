let toDoButton = document.getElementById('enter');
let toDocontainer = document.getElementById('to-do-containers');
let inputField = document.getElementById('user-task');


// Entering a new to-do item
toDoButton.addEventListener("click", function () {
    var startList = document.createElement('ul');
    var listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    toDocontainer.appendChild(startList);
    toDocontainer.appendChild(listItem);
    inputField.value =""
})

toDocontainer.addEventListener("click", function () {
    toDocontainer.style.textDecoration = "line-through";
})

// Using a key to enter items
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
    var startList = document.createElement('ul');
    var listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    toDocontainer.appendChild(startList);
    toDocontainer.appendChild(listItem);
    inputField.value =""
    };
})