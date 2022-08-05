// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
const node = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(node);
const elemnt = document.getElementById("victory");
element.appendChild(newHeader);