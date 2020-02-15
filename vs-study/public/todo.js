const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// 로컬스토리지에서 할 일을 알면 그것들은 좀 이상한 걸 하면서 추가해줘야한다.
const TODOS_LS = 'toDos';

function paintToDo(text) {
    // console.log(text);
}
// 내가 하고 싶은건, 누군가 엔터를 눌렀을 떄 
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}
// todo를 생성해주기.
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();