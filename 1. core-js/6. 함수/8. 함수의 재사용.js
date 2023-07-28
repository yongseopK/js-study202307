
const NOT_FOUND = -1;
let foods = ['짬뽕', '초밥', '김치찌개', '족발'];

// 배열에서 특정 요소가 어디 인덱스에 있는지 인덱스 반환
function myIndexOf(array, SearchElement) {
  for (let i = 0; i < array.length; i++) {
    if (SearchElement === array[i]) return i;
  }
  return NOT_FOUND;
}

// 배열에서 특정 요소가 존재하는지 유무 확인
function myIncludes(array, SearchElement) {
  // for (let i = 0; i < array.length; i++) {
  //   if (SearchElement === array[i]) return true;
  // }
  // return false;
  return myIndexOf(array, SearchElement) !== NOT_FOUND;
}

let index = myIndexOf(foods, '김치찌개');
console.log(`찾은 인덱스 : ${index}`);

let isPresent = myIncludes(foods, '김치찌개');
console.log(`존재 유무 : ${isPresent}`);
