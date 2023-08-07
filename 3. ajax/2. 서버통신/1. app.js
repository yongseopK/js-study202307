
// UL 태그
const $postUl = document.querySelector('.posts');

// 서버와 통신하기 (게시물 정보 100개 불러오기)
const xhr = new XMLHttpRequest();
// console.log(xhr);

// 통신정보를 전달
/*
  HTTP method
  - GET : 리소스를 조회 (게시물 조회, 마이페이지 회원정보 조회)
  - POST : 리소스를 등록 (게시물 쓰기, 회원가입, 장바구니 담기)
  - PUT : 리소스를 일괄수정 (게시물의 모든정보를 통채로 수정)
  - PATCH : 리소스를 일부수정 (게시물의 제목만 수정)
  - DELETE : 리소스를 삭제 (게시물 지우기, 회원탈퇴, 좋아요 취소)
*/

// 요청정보 초기화
xhr.open('GET', 'http://localhost:3000/posts');

// 요청 보내기
xhr.send();

// 응답 데이터 가져오기
xhr.onload = e => {
  // 요청이 끝난 후 xhr객체를 보면 응답정보다 들어있음
  // console.log(xhr.response);

  // 서버에서 온 데이터는 js가 아니라 json이다.
  // 따라서 js에서 사용하려면 json을 js로 변환해야 한다.

  // json -> js : JSON.parse()
  // js -> json : JSON.stringify()
  const postList = JSON.parse(xhr.response);
  // console.log(postList[0].title);

  postList.forEach(post => {
    const $postLi = document.createElement('li');
    $postLi.classList.add('post-item');
    $postLi.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button>DELETE</button>
    `;

    $postUl.appendChild($postLi);
  });
};