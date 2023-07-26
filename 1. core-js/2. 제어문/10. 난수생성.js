
// 1 ~ 10사이의 랜덤정수를 생성

// Math.random() : 0.0이상 ~ 1.0미만의 랜덤실수 생성
// Math.random() * 10 -> 0.0 <= ~ < 10.0
// Math.random(Math.random() *10) -> 0 <= ~ < 10
// Math.random(Math.random() *10) + 1 -> 1 <= ~ < 11

// x이상 y이하의 란덤 정수 생성 공식
// Math.floor(Math.random() * (y - x + 1)) + x;

let rn = Math.floor(Math.random() * 50) + 1;
console.log(rn);

