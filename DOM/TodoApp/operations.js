function addTodoItem() {
  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value.trim();
  if (todoInputValue === "") {
    alert("Please enter a todo item.");
    return;
  }
  const todoList = document.getElementById("todoList");
  if (!todoList) {
    const ul = document.createElement("ul");
    ul.id = "todoList";
    document.getElementById("app").appendChild(ul);
  }
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", completeTodoItem);

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteBtn";
  deleteButton.classList = ["deleteBtn","danger"];
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.style.cursor = "pointer";
  deleteButton.addEventListener("click", deleteTodoItem);

  li.append(checkbox, ` ${todoInputValue} `, deleteButton);
  document.getElementById("todoList").appendChild(li);
  todoInput.value = "";
}
function deleteTodoItem(event) {
  console.log("Delete button clicked", event);
  if (event.target.classList.contains("deleteBtn")) {
    const li = event.target.parentElement;
    li.remove();
  }
}

function completeTodoItem(event) {
  if (event.target.type === "checkbox") {
    const li = event.target.parentElement;
    if (event.target.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  }
}

export { addTodoItem, deleteTodoItem, completeTodoItem };