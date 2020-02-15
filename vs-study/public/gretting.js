// 하나는 쿼리 셀렉터. 이건 원하는 셀렉터는 다 가져옴. 클래스 css방식으로.
const form = document.querySelector(".js-form"),
    input = document.querySelector("input");
greeting = document.querySelector(".js-greetings");
// 이건 작은 정보를 너희 유저 컴퓨터에 저장하는 방법.


const USER_LS = "currentUser";
// loadName의 역할은 localStorage에 있는 값을 가져오는역할

function paintGreeting(text) {
    greeting.innerText = `Hello 반가워 ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem()
    if (currentUser === null) {
        // 로컬스토리지에 유저가 없을떄 어떤 행동을할까?
        // 아무도없을때

    } else {
        // 로컬 스토리지에 유저가 있을때에 어떤 행동을 할까?
        // 만약 현재 유저가 null 이 아니라면 이름을 색칠함
        // 유저가있을때
    }
}

// 둘 다 일 경우 모두 form은 display none을 하자.
function init() {
    loadName();

}

init();