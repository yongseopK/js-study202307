
// index.html에서 활용할 이벤트처리, 핸들러...

// 계산 이력을 모아둘 배열
const logEntries = [];

// 현재 계산기에 그려질 숫자
let currnetResult = 0;

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
}

// 사용자의 입력값을 읽어오는 함수
const getUserNumberInput = () => +$userInput.value;

// 계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput = (operateMark, originResult, calcNumber) => {
  // 로그 생성 : 0 + 11
  const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber}`;

  // 화면에 렌더링
  outputResult(currnetResult, calcDescriptionLog);
};

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  console.log('+ button click');
  // 입력창에 입력한 숫자를 읽기
  const enteredNumber = getUserNumberInput();
  // 계산 전 값을 백업
  const originResult = currnetResult;

  // 실제 계산 결과 반영
  currnetResult += enteredNumber;

  createLogAndRenderOutput('+', originResult, enteredNumber);
  // 로그이력 쌓기
  writeToLog('ADD', originResult, enteredNumber, currnetResult);
};

// substractHandler
const substractHandler = () => {
  console.log('- button click');
  const enteredNumber = getUserNumberInput();
  const originResult = currnetResult;
  currnetResult -= enteredNumber;
  createLogAndRenderOutput('-', originResult, enteredNumber);
  // 로그이력 쌓기
  writeToLog('SUBSTRACT', originResult, enteredNumber, currnetResult);
};

// multiplyHandler
const multiplyHandler = () => {
  console.log('* button click');

  const enteredNumber = getUserNumberInput();

  const originResult = currnetResult;
  currnetResult *= enteredNumber;
  createLogAndRenderOutput('x', originResult, enteredNumber);
  // 로그이력 쌓기
  writeToLog('MULTIPLY', originResult, enteredNumber, currnetResult);
};

// divideHandler
const divideHandler = () => {
  console.log('/ button click');

  const enteredNumber = getUserNumberInput();

  const originResult = currnetResult;
  currnetResult /= enteredNumber;
  createLogAndRenderOutput('/', originResult, enteredNumber);
  // 로그이력 쌓기
  writeToLog('DIVIDE', originResult, enteredNumber, currnetResult);
};

// ========== 이벤트 핸들러 바인딩 ========== //
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler);
$divideBtn.addEventListener('click', divideHandler);