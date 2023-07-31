let cnt = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        // console.log(`${i}, ${j}`);
        for (let k = 0; k < 4; k++) {
            cnt++;
        }

    }
}
console.log(`총 반복 횟수 ${cnt}회`);

// 구구단 1~9단 출력
let level;

for (level = 2; level <= 9; level++) {
    console.log(`==== 구구단 ${level}단 ====`);
    for (let line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
}
console.log('==================');