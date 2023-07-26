let a = +prompt("첫번째 숫자를 입력 : ");
let b = +prompt("두번째 숫자를 입력 : ");
let sum = 0;
if (a < b) {
    for (let i = a; i <= b; i++) {
        sum += i;
    }
} else {
    for (let i = b; i <= a; i++) {
        sum += i;
    }
}
alert(`a와 b의 누적합은 : ${sum}`)