let currentPageNum = 0; // 현재 페이지 숫자

const contentWrap = document.querySelectorAll(".wrap__content");
const totalPage = contentWrap.length; // 전체 페이지 개수
const buttons = document.querySelectorAll("button");
const imgArr = document.querySelectorAll("img");
const title = document.querySelector("h1");

const goPrevPage = () => {
  currentPageNum = (currentPageNum + totalPage - 1) % totalPage;
  setPage();
};

const goNextPage = () => {
  currentPageNum = (currentPageNum + 1) % totalPage;
  setPage();
};

const setPage = () => {
  resetPage();
  activateCurrentPage();
  setPageTitle();
};

const resetPage = () => {
  // 컨텐츠랩 전체 리셋
  for (let i = 0; i < totalPage; i++) {
    contentWrap[i].classList.remove("active");
  }
  //내부 이미지도 일단 전부 리셋
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].classList.remove("active");
  }
};

const activateCurrentPage = () => {
  //선택된 컨텐츠랩 활성
  contentWrap[currentPageNum].classList.add("active");

  //활성된 컨텐츠랩 내부 이미지들 활성
  for (let i = 0; i < 4; i++) {
    contentWrap[currentPageNum]
      .getElementsByTagName("img")
      [i].classList.add("active");
  }
};

const setPageTitle = () => {
  title.innerHTML = "PAGE : " + (currentPageNum + 1);
};

setPage();
buttons[0].addEventListener("click", goPrevPage);
buttons[1].addEventListener("click", goNextPage);
