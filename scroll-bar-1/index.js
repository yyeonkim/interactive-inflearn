const bar = document.querySelector(".bar"); // 바 요소 가져오기

// 스크롤 비율 계산해서 반환
const getScrollPercentage = () => {
  const scrollTop = document.documentElement.scrollTop;
  const totalHeight = document.body.scrollHeight;
  const outerHeight = window.outerHeight;
  const percentage = Math.ceil((scrollTop / (totalHeight - outerHeight)) * 100);

  return percentage;
};

// 바 너비 설정
const setBarWidth = (percentage) => {
  bar.style.width = `${percentage}%`;
};

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  const percentage = getScrollPercentage();
  setBarWidth(percentage);
});
