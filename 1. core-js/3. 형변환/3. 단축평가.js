
// 단축평가
/*
    t && t  -> t
    t && f  -> f
    f && t  -> f
    f && f  -> f

    t || t
    t || f
    f || t
    f || f
*/

// OR 연산 : 첫 번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

// AND 연산 : 첫 번째 falsy를 반환
console.log('HELLO' && 'WORLD');
console.log(null && '메롱');

/*
  <h1>웰컴 투 홈페이지</h1>
  isLogin && <h2>xxx님 환영합니다.</h2>
*/