// Write your code here!
const main = document.querySelector("main");
main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "<h1>Sarah is the champion</h1>";