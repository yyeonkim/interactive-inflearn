const bar = document.querySelector(".bar"); // 바 요소 가져오기

// 스크롤 비율 계산해서 반환
const getScrollPercentage = () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.body.scrollHeight;
  const innerHeight = window.innerHeight;
  const percentage = Math.ceil(
    (scrollTop / (scrollHeight - innerHeight)) * 100
  );

  return percentage;
};

// 바 너비 설정
const setBarHeight = (percentage) => {
  bar.style.height = `${percentage}%`;
};

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  const percentage = getScrollPercentage();
  setBarHeight(percentage);
});
