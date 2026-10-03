import Header from "./header.js";
import { addTodoItem } from "./operations.js";
function App(){
    const app = document.getElementById("app");
// Header Text
const headerHTML = Header("Happy Coding");
app.appendChild(headerHTML);
// Input Field
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a todo item";
input.id = "todoInput";
app.appendChild(input);
// Add Button
const addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.id = "addButton";
addButton.style.cursor = "pointer";
app.appendChild(addButton);

const addBtn = document.getElementById("addButton");
addBtn.addEventListener("click", addTodoItem);


}


App();
