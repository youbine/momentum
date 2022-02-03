const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-li");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  // const button = document.createElement("button");
  // button 대신 deleteIcon으로 대체
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt fa-sm";

  deleteIcon.addEventListener("click", deleteToDo);
  li.appendChild(deleteIcon);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //이미 갖고있던 Todos에 새로운 Todos를 추가 했다
  parsedToDos.forEach(paintToDo);
}
