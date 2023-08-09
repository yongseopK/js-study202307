/*
1. 할 일 목록 렌더링 - db.json에 있는 todos를 get요청으로 
                   fetch해서 가져와서 렌더링
2. 새로운 할일 추가 - 할일을 쓰고 더하기 누르면 
                  post요청으로 db.json에 객체 추가, 렌더링
3. 할 일 삭제 - 엑스 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
4. 할일 체크 기능 - 체크박스를 누르면 put, patch요청으로 db.json에 
                done값을 반대값으로 수정
5. 할 일 수정 기능 - 초록색버튼을 누르면 수정모드로 진입(인풋창 활성화)
                 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고
                 db.json에서도 수정
*/

const URL = 'http://localhost:3001/todos';

// UL 태그
const $todoList = document.querySelector(".todo-list");


// form 태그
const $addForm = document.querySelector(".todo-insert");

// 1.
// fetch(URL)
//     .then((res) => res.json())
//     .then((postList) => {
//         const $postTemplate = document.getElementById("single-post");

//         postList.forEach(({ id, text }) => {
//             // 템플릿태그에서 li태그를 추출
//             const $postLi = document.importNode($postTemplate.content, true);

//             $postLi.querySelector("li").dataset.postId = id;
//             $postLi.querySelector("li").setAttribute("done", "false");
//             $postLi.querySelector("span").textContent = text;


//             $postUl.appendChild($postLi);

//         })
//     });

const fetchTodos = (url, method = 'GET', payload = null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById('single-todo');

  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector('li').dataset.id = id; // data-id 속성 부여
    $newLi.querySelector('.text').textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
    // console.dir($checkbox);
    $checkbox.checked = done;

    done && $checkbox.parentNode.classList.add('checked');

    $todoList.appendChild($newLi);
  });
};

// ================= 앱 실행 =================//
const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();

// 2.
$addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = {
    text: document.querySelector('#todo-text').value,
    done: false,
  };

  // fetch로 POST요청 보내는법
  fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      alert("등록 성공!");
    } else {
      alert("등록 실패!");
    }
  });
});

// 3. 
// 삭제 클릭하면 벌어질 일들에 대한 함수
// const deletePostHandler = (e) => {
//   if (!e.target.matches(".remove span")) return;

//   // 삭제 클릭 대상 아이디 잡아오기
//   console.log("삭제 클릭!");
//   const id = e.target.closest(".todo-list-item").dataset.postId;
//   fetch(`${URL}/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => {
//     if (res.status === 200) {
//       alert("삭제 성공!");
//     } else {
//       alert("삭제 실패!");
//     }
//   });
// };

// // 삭제 이벤트 등록
// $postUl.addEventListener("click", deletePostHandler);

// 4.
// // done 바꾸기
// const patchPostHandelr = (e) => {
//     if (!e.target.matches(".checkbox input")) return;

//     // 수정 클릭 대상 아이디 잡아오기
//     console.log("수정 클릭!");
//     const id = e.target.closest(".todo-list-item").dataset.postId;

//     const currentDoneValue = e.target.checked;
//     const newDoneValue = !currentDoneValue;

//     fetch(`${URL}/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             done: newDoneValue,
//         })
//     }).then((res) => res.json())
//         .then((data) => console.log(data));

//     // 업데이트된 done 값에 따라 UI 업데이트
//     const $postLi = e.target.closest(".todo-list-item");
//     const $textSpan = $postLi.querySelector(".text");
//     $textSpan.classList.toggle("done", newDoneValue); // "done" 클래스 추가 또는 제거

//     // 선택사항으로, 체크박스 상태 업데이트
//     // e.target.checked = newDoneValue;

// }


// $postUl.addEventListener('change', patchPostHandelr);

// 5. 
// const fixPostHandler = (e) => {
//   if (!e.target.matches(".modify span")) return;

//   console.log("수정 클릭!");
//   const id = e.target.closest(".todo-list-item").dataset.postId;

  // fetch(`${URL}/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({

  //     }),

  // })
//}


// $postUl.addEventListener('click', fixPostHandler);