
// index.html에서 활용할 이벤트처리, 핸들러...

// 연산 타입을 산수로 관리
const ADD = 'ADD';
const SUB = 'SUB';
const MUL = 'MUL';
const DIV = 'DIV';

// 계산 이력을 모아둘 배열
const logEntries = [];

// 현재 계산기에 그려질 숫자
let currnetResult = 0;

let seq = 0; // 로그 번호

// operation문자로 기호를 생성하는 함수
const convertOperationToMark = (operation) => {
  let mark;

  switch (operation) {
    case ADD: mark = '+'; break;
    case SUB: mark = '-'; break;
    case MUL: mark = 'x'; break;
    case DIV: mark = '/'; break;
  }
  return mark;
};

// 로그 이력을 렌더링하는 함수
const renderToLog = ({ operation, prevResult: firstNumber, number: secondNumber, result }) => {
  // li태그 생성
  const $newLi = document.createElement('li');
  $newLi.classList.add('log-entries__item');
  $newLi.textContent = `${++seq}. ${firstNumber} ${convertOperationToMark(operation)} ${secondNumber} = ${result}`;

  // ul에 추가
  $logEntries.appendChild($newLi);
}
// 로그 이력을 만드는 함수
const writeToLog = (operation, prevResult, number, result) => {
  // 하나의 로그 객체 (연산, 이전결과, 연산숫자, 연산결과)
  const logObject = {
    operation,
    prevResult,
    number,
    result
  };
  logEntries.push(logObject);
  console.log(logEntries);

  renderToLog(logObject);
}



// 사용자의 입력값을 읽어오는 함수
const getUserNumberInput = () => +$userInput.value;

// 계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput = (operateMark, originResult, calcNumber) => {
  // 로그 생성 : 0 + 11
  const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber} `;

  // 화면에 렌더링
  outputResult(currnetResult, calcDescriptionLog);
};

// 계산 기능 헬퍼 함수
const calculate = (type) => {
  // 계산 전 값을 백업
  const originResult = currnetResult;

  // 입력창에 입력한 숫자를 읽기
  const enteredNumber = getUserNumberInput();

  let mark;
  if (type === ADD) {
    mark = '+';
    currnetResult += enteredNumber;
  } else if (type === SUB) {
    mark = '-';
    currnetResult -= enteredNumber;
  } else if (type === MUL) {
    mark = 'x';
    currnetResult *= enteredNumber;
  } else {
    mark = '/';
    currnetResult /= enteredNumber;
  }
  console.log(`${mark} button click`);

  createLogAndRenderOutput(mark, originResult, enteredNumber);
  // 로그이력 쌓기
  writeToLog(type, originResult, enteredNumber, currnetResult);
};

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  calculate(ADD);
};

// substractHandler
const substractHandler = () => {
  calculate(SUB);
};

// multiplyHandler
const multiplyHandler = () => {
  calculate(MUL);
};

// divideHandler
const divideHandler = () => {
  calculate(DIV);
};

// ========== 이벤트 핸들러 바인딩 ========== //
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler);
$divideBtn.addEventListener('click', divideHandler);