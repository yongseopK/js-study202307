// alert("[ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요 ]\n================================");



// let i = 0;
// while (true) {
//     let a = Math.floor(Math.random() * 50) + 1;
//     let b = Math.floor(Math.random() * 50) + 1;
//     let c = a + b;
//     i++;
//     let ans = +prompt(`Q${i}. ${a} + ${b} = ??`);
//     if (ans === c) {
//         alert("정답입니다!");
//         continue;
//     } else if (ans === 0) {
//         alert("게임을 종료합니다!")
//         break;
//     } else {
//         alert("틀렸어요~");
//         continue;
//     }
// }

// alert("[ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요 ]\n================================");


// ansCnt = 0;
// incorCnt = 0;
// let i = 0;
// while (true) {
//     let a = Math.floor(Math.random() * 50) + 1;
//     let b = Math.floor(Math.random() * 50) + 1;
//     let c = a + b;
//     i++;
//     let ans = +prompt(`Q${i}. ${a} + ${b} = ??`);
//     if (ans === c) {
//         alert("정답입니다!");
//         ansCnt++;
//         continue;
//     } else if (ans === 0) {
//         alert("게임을 종료합니다!")
//         alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
//         break;
//     } else {
//         alert("틀렸어요~");
//         incorCnt++;
//         continue;
//     }
// }

// alert("[ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요 ]\n정답에는 음수도 등장하며,\n나눗셈 계산 시 나머지는 버리고 몫만 입력해주세요.\n================================");


// ansCnt = 0;
// incorCnt = 0;
// let i = 0;
// while (true) {
//     let markRnd = Math.floor(Math.random() * 4) + 1;

//     let a = Math.floor(Math.random() * 50) + 1;
//     let b = Math.floor(Math.random() * 50) + 1;
//     let c = a + b;
//     let d = a - b;
//     let e = a * b;
//     let f = Math.floor(a / b);

//     if (markRnd === 1) {
//         i++;
//         let ans = +prompt(`Q${i}. ${a} + ${b} = ??`);
//         if (ans === c) {
//             alert("정답입니다!");
//             ansCnt++;
//             continue;
//         } else if (ans === 0) {
//             alert("게임을 종료합니다!")
//             alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
//             break;
//         } else {
//             alert("틀렸어요~");
//             incorCnt++;
//             continue;
//         }
//     }
//     if (markRnd === 2) {
//         i++;
//         let ans = +prompt(`Q${i}. ${a} - ${b} = ??`);
//         if (ans === d) {
//             alert("정답입니다!");
//             ansCnt++;
//             continue;
//         } else if (ans === 0) {
//             alert("게임을 종료합니다!")
//             alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
//             break;
//         } else {
//             alert("틀렸어요~");
//             incorCnt++;
//             continue;
//         }
//     }
//     if (markRnd === 3) {
//         i++;
//         let ans = +prompt(`Q${i}. ${a} * ${b} = ??`);
//         if (ans === e) {
//             alert("정답입니다!");
//             ansCnt++;
//             continue;
//         } else if (ans === 0) {
//             alert("게임을 종료합니다!")
//             alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
//             break;
//         } else {
//             alert("틀렸어요~");
//             incorCnt++;
//             continue;
//         }
//     }
//     if (markRnd === 4) {
//         i++;
//         let ans = +prompt(`Q${i}. ${a} / ${b} = ??`);
//         if (ans === f) {
//             alert("정답입니다!");
//             ansCnt++;
//             continue;
//         } else if (ans === 0) {
//             alert("게임을 종료합니다!")
//             alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
//             break;
//         } else {
//             alert("틀렸어요~");
//             incorCnt++;
//             continue;
//         }
//     }
// }

alert("[ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요 ]\n정답에는 음수도 등장하며,\n나눗셈 계산 시 나머지는 버리고 몫만 입력해주세요.\n================================");
let dif;
dif = +prompt(`~~~~~~~ 난이도를 설정합니다. ~~~~~~~\n[1. 상 (1~100) | 2. 중 (1~50)] | 3 하 (1~20) `);
let cnt;
ansCnt = 0;
incorCnt = 0;
let i = 0;
let a, b, c, d, e, f;
while (true) {
    let markRnd = Math.floor(Math.random() * 4) + 1;

    if (dif === 1) {
        a = Math.floor(Math.random() * 100) + 1;
        b = Math.floor(Math.random() * 100) + 1;
    } else if (dif === 2) {
        a = Math.floor(Math.random() * 50) + 1;
        b = Math.floor(Math.random() * 50) + 1;
    } else if (dif === 3) {
        a = Math.floor(Math.random() * 20) + 1;
        b = Math.floor(Math.random() * 20) + 1;
    }
    c = a + b;
    d = a - b;
    e = a * b;
    f = Math.floor(a / b);


    if (markRnd === 1) {
        i++;
        let ans = +prompt(`Q${i}. ${a} + ${b} = ??`);
        if (ans === c) {
            alert("정답입니다!");
            ansCnt++;
            continue;
        } else if (ans === 0) {
            alert("게임을 종료합니다!")
            alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
            break;
        } else {
            alert("틀렸어요~");
            incorCnt++;
            continue;
        }
    }
    if (markRnd === 2) {
        i++;
        let ans = +prompt(`Q${i}. ${a} - ${b} = ??`);
        if (ans === d) {
            alert("정답입니다!");
            ansCnt++;
            continue;
        } else if (ans === 0) {
            alert("게임을 종료합니다!")
            alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
            break;
        } else {
            alert("틀렸어요~");
            incorCnt++;
            continue;
        }
    }
    if (markRnd === 3) {
        i++;
        let ans = +prompt(`Q${i}. ${a} * ${b} = ??`);
        if (ans === e) {
            alert("정답입니다!");
            ansCnt++;
            continue;
        } else if (ans === 0) {
            alert("게임을 종료합니다!")
            alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
            break;
        } else {
            alert("틀렸어요~");
            incorCnt++;
            continue;
        }
    }
    if (markRnd === 4) {
        i++;
        let ans = +prompt(`Q${i}. ${a} / ${b} = ??`);
        if (ans === f) {
            alert("정답입니다!");
            ansCnt++;
            continue;
        } else if (ans === 0) {
            alert("게임을 종료합니다!")
            alert(`정답횟수: ${ansCnt}, 틀린횟수: ${incorCnt}회`)
            break;
        } else {
            alert("틀렸어요~");
            incorCnt++;
            continue;
        }
    }
}