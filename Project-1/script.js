const input = document.querySelector("#inputField__input");
const addBtn = document.querySelector(".inputField__btn");
const ulEle = document.querySelector(".list");

//Adding new Todo
function addNewTodo(e) {
  let value = input.value ? input.value : "";
  console.log(input.value);
  if (value) {
    let html = `
     <li class="list__item">
            <button class="list__btn"></button>
            <div class="list__text">${value}</div>

            <button class="list__icon btn">
              <ion-icon name="create" class="icon list__icon--edit"></ion-icon>
            </button>
            <button class="list__icon btn">
              <ion-icon name="trash" class="icon list__icon--delete"></ion-icon>
            </button>
          </li>
    `;
    ulEle.insertAdjacentHTML("beforeend", html);
    input.value = "";
  }
}

//Updating Todo
function updateList(e) {
  if (e.target.classList.contains("list__btn")) {
    e.target.classList.toggle("list__btn--checked");
  }
  if (e.target.classList.contains("list__icon--delete")) {
    ulEle.removeChild(e.target.closest(".list__item"));
  }
  if (e.target.classList.contains("list__icon--edit")) {
    editTodo(e.target);
  }
}

//Editing old Todo
function editTodo(target) {
  let oldTodo = target
    .closest(".list__item")
    .querySelector(".list__text").textContent;

  ulEle.removeChild(target.closest(".list__item"));

  input.focus();
  input.value = oldTodo;
}

//Event listeners
addBtn.addEventListener("click", addNewTodo);
ulEle.addEventListener("click", updateList);
