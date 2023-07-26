// /** UP&DOWN 게임 */

// // 1번
// alert("[ 1 ~ 100 사이의 무작위 숫자를 맞춰보세요!!!]");

// let a = Math.floor(Math.random() * 100) + 1;

// while (true) {
//     let b = +prompt("숫자를 입력하세요 : ");
//     if (a === b) {
//         alert("딩동댕~");
//         break;
//     } else if (a < b) {
//         alert("DOWN!!");
//     }
//     else {
//         alert("UP!!");
//     }
// }


// 2번
alert("[ 1 ~ 50 사이의 무작위 숫자를 10번 안에 맞춰보세요!!!!!!!!");

let a = Math.floor(Math.random() * 50) + 1;
let cnt = 10;

let i = 1;

let min = 1, max = 100;
while (i <= cnt) {
  let b = +prompt(`번호 한 번 눌러보랑께 : [${min} ~ ${max}]`);
  // 입력값 유효성 검사
  if (b < min || b > max) {
    alert(`범위 안의 값을 입력하세요!`);
    continue;
  }
  if (a === b) {
    alert(`정답!!\n${cnt}번 남기고 맞췄네요?`);
    break;
  } else {
    if (a < b) {
      cnt--;
      alert(`DOWN!!\n${cnt}번 남았어요~\n`);
      max = b - 1;
      if (cnt === 0) {
        alert("님 졌음");
        break;
      }
    } else {
      cnt--;
      alert(`UP!!\n${cnt}번 남았어요~`);
      min = b + 1;
      if (cnt === 0) {
        alert("님 졌음");
        break;
      }
    }
  }
}

// 3번
// let dif = +prompt("난이도를 설정하세요~\n1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)");

// let cnt;

// if (dif === 1) {
//     cnt = 3;
// } else if (dif === 2) {
//     cnt = 6;
// } else if (dif === 3) {
//     cnt = 10;
// }

// alert(`[ 1 ~ 50 사이의 무작위 숫자를 ${cnt}번 안에 맞춰보세요!!!!!!!!`);

// let a = Math.floor(Math.random() * 50) + 1;


// let i = 1;
// while (i <= cnt) {
//     let b = +prompt("번호 한 번 눌러보랑께 : ");
//     if (a === b) {
//         alert(`정답!!\n${cnt}번 남기고 맞췄네요?`);
//         break;
//     } else {
//         if (a < b) {
//             cnt--;
//             alert(`DOWN!!\n${cnt}번 남았어요~`);
//             if (cnt === 0) {
//                 alert("님 졌음");
//                 break;
//             }
//         } else {
//             cnt--;
//             alert(`UP!!\n${cnt}번 남았어요~`);
//             if (cnt === 0) {
//                 alert("님 졌음");
//                 break;
//             }
//         }
//     }
// }
