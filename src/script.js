var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var img = document.createElement("img");
    img.src = "https://image.flaticon.com/icons/png/512/87/87251.png";
    li.appendChild(img);
    img.onclick = removeParent;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

input.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


ul.onclick = function (event) {
    var target = event.target;
    target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}

for (i = 0; i < listLength(); i ++) {

    deleteButton();
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}
