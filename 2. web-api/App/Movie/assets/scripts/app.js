// modal element
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById('delete-modal');

// add movie button
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

// cancel, accept button in modal
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 뭐시기
const $userInputs = [
  ...$addMovieModal.querySelectorAll("input"),
];
const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

const CLASS_VISIBLE = 'visible';

// ===== 이벤트 핸들러 및 이벤트 바인딩 ===== //

// Add movie버튼 클릭이벤트

// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = e => {
  $addMovieModal.classList.add(CLASS_VISIBLE);
  $backdrop.classList.add(CLASS_VISIBLE);

  $titleInput.value = '';
  $imgUrlInput.value = '';
};


const closeAddModal = () => {
  $backdrop.classList.remove(CLASS_VISIBLE);
  $addMovieModal.classList.remove(CLASS_VISIBLE);

  $titleInput.value = '';
  $imgUrlInput.value = '';
};

// 백트롭 영역을 클릭하면 모달이 닫히는 핸들러
const backdropHandler = e => {
  closeAddModal();
};

// 영화 추가 모달창의 취소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = e => {
  closeAddModal();
};

//Add movie버튼 클릭이벤트
$addMovieButton.addEventListener('click', showMovieModalHandler);

// backdrop영역 클릭이벤트
$backdrop.addEventListener('click', backdropHandler);

// Add Movie모달 취소버튼 클릭이벤트
$cancelAddMovieButton.addEventListener('click', closeMovieModalHandler);

