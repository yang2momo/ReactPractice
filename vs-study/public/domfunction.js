const title = document.getElementById("title");

function handleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleClick);
// console.log(title);
// // console.error("나가주그렴");

// title.innerHTML = "가장 아름다운건 꾸준한 노력이다.";

// function handleResize(event) {
//     console.log(event);
// }

// // 폼을 만들거나 링크를 클릭할때 유용함.
// window.addEventListener("resize", handleResize);

if (10 === 10) {
    console.log("노력");
}
else {
    console.log("끈기");
}

const age = prompt("몇살?");

if (age >= 50 && age <= 21) {
    console.log("you can drink");
} else {
    console.log("you cant")
}