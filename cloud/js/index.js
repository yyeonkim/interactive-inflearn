let scrollTop;

const bar = document.querySelector(".bar");
const cloudWraps = document.querySelectorAll(".cloud-wrap");

// 스크롤 이벤트 함수
const handleScroll = (event) => {
  setBarHeightByPercentage();
  setCloudScroll();
};

// 바 높이 설정
const setBarHeightByPercentage = () => {
  const percentage = getScrollPercentage();
  bar.style.height = `${percentage}%`;
};

const getScrollPercentage = () => {
  scrollTop = document.documentElement.scrollTop;
  const offsetHeight = document.body.offsetHeight;
  const innerHeight = window.innerHeight;
  const percentage = Math.ceil(
    (scrollTop / (offsetHeight - innerHeight)) * 100
  );

  return percentage;
};

// 구름 스크롤 속도 설정
const setCloudScroll = () => {
  cloudWraps[0].style.transform = `translate(0, ${scrollTop / -5}px)`;
  cloudWraps[1].style.transform = `translate(0, ${scrollTop / -2}px)`;
};

// 스크롤 이벤트
window.addEventListener("scroll", handleScroll);
