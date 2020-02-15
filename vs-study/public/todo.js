const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// 로컬스토리지에서 할 일을 알면 그것들은 좀 이상한 걸 하면서 추가해줘야한다.
const TODOS_LS = 'toDos';
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}
// todo를 생성해주기.
function init() {
    loadToDos();
}

init();