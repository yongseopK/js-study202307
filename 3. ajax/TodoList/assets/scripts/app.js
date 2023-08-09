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

// ========== 이벤트 관련 함수 ========== //

// step 2. 할 일 등록 기능
const $addBtn = document.getElementById('add');

const addTodoHandler = e => {
  // 1. 클릭 이벤트가 잘 일어나나
  // console.log(('클릭!'));

  // 2. 클릭하면 일단 왼쪽에 인푹의 텍스트를 읽어야함
  // 2-1. 인풋부터 찾기
  const $textInput = document.getElementById('todo-text');
  // 2-2. 인풋 안에있는 텍스트를 꺼내기
  const inputText = $textInput.value;

  // 3. 그럼 서버에 이 데이터를 보내서 저장을 해야하는데
  // -> fetch가 필요하겠다. 저장이니깐 POST해야겠다.
  // -> payload를 API 스펙에 맞게 만들어 보내야 함
  const payload = {
    text: inputText,
    done: false,
  }
  fetchTodos(URL, 'POST', payload)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        console.log('성공');
      } else {
        console.log('실패');
      }
    });
};

$addBtn.addEventListener('click', addTodoHandler);

// step 3. 할 일 삭제 기능

const deleteTodoHandler = e => {
  if (!e.target.matches(".remove span")) return;

  if (!confirm('진짜?')) return;
  // 특정 할 일을 지우기 위해 클릭한 할 일의 id를 알아내야 함
  const id = e.target.closest('.todo-list-item').dataset.id;
  // console.log(id);

  // 서버에 삭제 요청하기
  fetchTodos(`${URL}/${id}`, 'DELETE')
    .then(res => {
      if (res.status === 200) {
        console.log('삭제 성공');
      } else {
        console.log('삭제 실패');
      }
    })
};
$todoList.addEventListener('click', deleteTodoHandler);

// step 4. 할 일 완료 체크 처리
const checkTodoHandler = e => {
  // console.log('체크박스 누름', e.target);

  // 1. 서버에 수정 요청을 보내서 누른 그 할 일의 done을 반대값으로 수정해야 함.
  // 1-1. 현재 체크값인 t, f인이 알아야 반대로 바꾸든 말든;
  // console.log(e.target.checked); // 현재상태지 이전상태가 아니다..!

  const id = e.target.closest('.todo-list-item').dataset.id;
  fetchTodos(`${URL}/${id}`, 'PATCH', {
    done: e.target.checked,
  });
};

$todoList.addEventListener('change', checkTodoHandler);


// step 5. 할 일 수정

// 수정 모드 진입하는 함수
const enterModifyMode = ($undo) => {
  // 클래스 이름을 변경하여 아이콘을 바꾸자
  // -> 클릭한 span태그 노드를 가져와야 함.
  $undo.classList.replace('lnr-undo', 'lnr-checkmark-circle');

  // $undo근처에 있는 span.text를 가져와야 함.
  const $textSpan = $undo.closest('.todo-list-item').querySelector('.text');

  // 교체할 input을 생성
  const $modInput = document.createElement('input');
  $modInput.classList.add('modify-input');
  $modInput.setAttribute('type', 'text');
  $modInput.value = $textSpan.textContent;

  // span을 input으로 교체하기
  const $label = $textSpan.parentNode;
  $label.replaceChild($modInput, $textSpan);
};

const modifyTodo = ($checkMark) => {
  const $li = $checkMark.closest('.todo-list-item');
  const id = $li.dataset.id;
  const newText = $li.querySelector('.modify-input').value;

  fetchTodos(`${URL}/${id}`, 'PATCH', {
    text: newText
  })
};


// 수정 이벤트 처리 핸들러
const modifyTodoHandler = e => {
  if (e.target.matches('.modify span.lnr-undo')) {
    enterModifyMode(e.target); // 수정 모드 진입하기
  } else if (e.target.matches('.modify span.lnr-checkmark-circle')) {
    modifyTodo(e.target); // 서버에 수정 요청 보내기
  }
};
$todoList.addEventListener('click', modifyTodoHandler);


// ================= 앱 실행 =================//
const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();