const title = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

// 누군가 내 타이틀을 클릭하면 지금 가진 색깔을 가져옴
function handleClick() {

    const currentColor = title.style.color; // 이벤트로직에 추가하는것
    // 컨텐츠를 조금 수정.

    console.log(currentColor);
    // title.style.color = "red";

    if (currentColor === BASE_COLOR) {
        console.log("그다음컬러");
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
        console.log("이전색");
    }

}

// title.addEventListener("click", handleClick);

function init() {

    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);

    console.log("되긴하는거닝?");
}

init();