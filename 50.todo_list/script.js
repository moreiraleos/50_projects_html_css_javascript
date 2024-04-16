const input = document.querySelector(".input");
const todosEl = document.querySelector(".todos");
const todos = document.querySelectorAll(".todos li");
const form = document.getElementById("form");

const todosLc = JSON.parse(localStorage.getItem("todos"));

if (todosLc) {
  todosLc.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

localStorage.setItem("name", "Leonardo");

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todosLi = document.createElement("li");
    if (todo && todo.completed) {
      todosLi.classList.add("completed");
    }
    todosLi.innerText = todoText;

    todosLi.addEventListener("click", () => {
      todosLi.classList.toggle("completed");
      updatels();
    });
    todosLi.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todosLi.remove();
      updatels();
    });

    todosEl.appendChild(todosLi);
    input.value = "";
    updatels();
  }
}

function updatels() {
  const todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
