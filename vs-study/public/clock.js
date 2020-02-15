// js-clock이름을 찾아주는 역할.
const clockContainer = document.querySelector(".js-clock"),
    // clock class의 자식을 탐색하고싶어서 만든것.
    clockTitle = clockContainer.querySelector("h1");

// const date = new Date();
// date 하게되면 현재 시간이나옴.
// 현재 시간을 얻기위해서 콘솔창을 사용

// 여기서 new Date는 object다
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();