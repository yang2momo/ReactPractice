
const what = "공부를 합시당";
console.log(what);

const dog = {
    name: "momo",
    dog: "푸들"
}

const cat = {
    name: "로로",
    cat: "귀요미",
    dog
}

console.log(cat.dog)

function momo(name, age) {
    console.log("이름", name, "나이", age);
}

momo("momoyang", 22);

function sisi(name, age) {
    return `이름 ${name} 나이 ${age}`;
}


const myName = sisi("rora", 13);

console.log(myName);
// myName은 sisi의 실행된 결과 값이다.
// sisi 여기서 아무것도 반환하지 않음 그래서 undefinde가됨
// 만약 myName가 정의안된상태(undefinde)가 되지 않기 ㄹ원한다면 return값을 주면됨

const calcul = {
    plus: function (a, b) {
        return a + b;
    }
}
// console.log(myName);
const plus = calcul.plus(5, 5);
console.log(plus);

// console, calcul 두개다 모두 개체이다.
// log() 인자를 가지는 함수
// plus()도 2개의 인자를 가지는 함수

// 곱하기 빼기 나누기 제곱근(a**b)


const calculator = {
    pl: function (a, b) {
        return a + b;
    },
    mu: function (a, b) {
        return a - b;
    },
    mx: function (a, b) {
        return a * b;
    },
    nu: function (a, b) {
        return a / b;
    },
    zz: function (a, b) {
        return a ** b;
    }
}

const mu = calculator.mu(9, 5);
console.log(mu);
console.log("제곱근" + calculator.zz(2, 2));

function pl(a, b) {
    return a + b;
}
const jin = pl(4, 5);
console.log(jin);














