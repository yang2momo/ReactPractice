const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// 로컬스토리지에서 할 일을 알면 그것들은 좀 이상한 걸 하면서 추가해줘야한다.
const TODOS_LS = 'toDos';

// array로 저장해야하기때문에
// 해야할 일을 생성했을 때 toDOs  array에 추가되도록한다.
let toDos = [];

// li에 없는 id인 toDOs를 체크하고싶을때 = 지우고 싶은것
// function filterFn(toDo) {
//     // true 인 것들인 toDos인것만 출력
//     return toDo.id === 1
// }
function deleteToDo(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filterFn을 여기다가 넣으면 이것은 array 안에 있는
    // 모든 toDos를 통한다.

    const clseanToDos = toDos.filter(function (toDo) {
        // toDo의 id가 숫자
        // li의 id는 string
        return toDo.id !== parseInt(li.id);
    });
    // cleanToDos와 filter가 하는것은 filterFn이 체크가 된 
    // 아이템들의 array를 주는 것.
    console.log(clseanToDos);
    toDos = clseanToDos;
    saveToDos(); // toDos를 저장하는 기능
}
// toDos를 가져와서 로컬에 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // console.log(text);
    // HTML 만들기
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    // li에 id를 추가(원하는 li를 삭제하기위해)
    li.id = newId;
    // 'toDos' array 안에 'toDoObj'를 넣게 됨
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

    // todo를 이렇게 저장하는 이유는, local storage에도 투두를 저장해둬야하기 때문.
}
// 내가 하고 싶은건, 누군가 엔터를 눌렀을 떄 
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            // console.log(toDo.text);
            // toDos를 가져온뒤, 이라인에서 parse 
            // 즉 가져온 것을 자바스크립트 object로 변환해 줄것이고,
            // 각각에 대해서 paintToDo라는 function이 실행됨.
            paintToDo(toDo.text);
        });
    }
}
// todo를 생성해주기.
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();