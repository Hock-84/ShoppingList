var addItemButton = document.getElementById("addItem");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var trashButton = document.createElement("button")
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(trashButton)
	ul.appendChild(li);
	input.value = "";
	trashButton.classList.add("delButton");
	trashButton.classList.add("fa");
	trashButton.classList.add("fa-trash");
	trashButton.onclick=delItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(e) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(e) {
  e.target.classList.toggle('done');
}

function deleteFromList (e) {
	if (e.target.className === "delButton"){
		e.target.parentElement.remove();
	}
}

function delItem(e) {
	e.target.parentNode.remove();
}


addItemButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", markDone);