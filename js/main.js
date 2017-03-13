var btn = document.querySelector("button");
var ul = document.querySelector("ul");
var li, grocery;

function removeItem(ev) {

    "use strict";

    ul.removeChild(ev.target);

}

function addItem() {
	
	"use strict";

	grocery = prompt("Enter a new item for to do list");
	
	
    if (grocery != "") {
        
        li = document.createElement("li");
        
        li.innerHTML = grocery;
        
        ul.appendChild(li);
        
        li.addEventListener("click", removeItem, false);
        
    }
}

btn.addEventListener("click", addItem, false);

























