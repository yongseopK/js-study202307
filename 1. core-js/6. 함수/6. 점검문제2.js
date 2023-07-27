/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...n) {
  let total = 0;
  let avg = 0;
  for (let a of n) {
    total += a;
    avg += a / n.length;
  }
  return {
    total : total,
    avg : avg,
  };
}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);



// function operateAll(n1, n2) {
//     return {
//       plus: n1 + n2,
//       minus: n1 - n2,
//       multi: n1 * n2,
//       divide: n1 / n2,
//     };
//   }
  
//   let results = operateAll(20, 10);
//   console.log(results);
//   console.log(`덧셈결과 : ${results.plus}`);

// let total = 0;
//   for (let n of numbers) {
//     total += n;
//   }
//   return total;