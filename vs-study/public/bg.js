const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    // +1 을 하는 이유는 Math.radom()함수가 0부터 시작하기때문
    image.src = `../images/${(imgNumber + 1)}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    // 숫자 생성
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();