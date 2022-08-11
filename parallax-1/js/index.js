let scrollTop;
let mx, my;
let imgX = 0;
let imgY = 0;
const speed = 0.05;

const progressBar = document.querySelector(".progress-bar");

const parallax0 = document.getElementById("parallax-0");
const parallax1 = document.getElementById("parallax-1");
const parallax2 = document.getElementById("parallax-2");
const parallax3 = document.getElementById("parallax-3");
const parallax4 = document.getElementById("parallax-4");
const parallax5 = document.getElementById("parallax-5");
const parallax6 = document.getElementById("parallax-6");

const handleScroll = (event) => {
  setProgressBarWidth();
  createParallaxScrollingEffect();
};

const setProgressBarWidth = () => {
  const percentage = getPercentageOfScroll();
  progressBar.style.width = `${percentage}%`;
};

const getPercentageOfScroll = () => {
  scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.body.scrollHeight;
  const innerHeight = window.innerHeight;
  const percentage = Math.ceil(
    (scrollTop / (scrollHeight - innerHeight)) * 100
  );

  return percentage;
};

const createParallaxScrollingEffect = () => {
  parallax0.style.transform = `translate(0, ${scrollTop * 0.03}px)`;
  parallax1.style.transform = `translate(0, ${-scrollTop * 0.03}px)`;
  parallax2.style.transform = `translate(0, ${-scrollTop * 0.12}px)`;
  parallax3.style.transform = `translate(0, ${-scrollTop * 0.16}px)`;
  parallax4.style.transform = `translate(0, ${-scrollTop * 0.22}px)`;
  parallax5.style.transform = `scale(1.1) translate(0, ${-scrollTop * 0.25}px)`;
};

const handleMousemove = (event) => {
  makeZeroInCenter(event);
  setImgPosition();
};

// 화면 중앙을 (0, 0)으로 한 마우스 좌표 설정
const makeZeroInCenter = (event) => {
  mx = event.clientX - window.innerWidth / 2;
  my = event.clientY - window.innerHeight / 2;
};

const setImgPosition = () => {
  scrollTop = document.documentElement.scrollTop;
  imgX += (mx - imgX) * speed;
  imgY += (my - imgY) * speed;

  parallax4.style.transform = `translate(${mx / 140}px, ${
    -scrollTop * 0.22
  }px)`;
  parallax5.style.transform = `scale(1.1) translate(${mx / 50}px, ${
    -scrollTop * 0.25
  }px)`;
  parallax6.style.transform = `scale(1.2) translate(${-mx / 20}px, ${
    -my / 20
  }px)`;

  window.requestAnimationFrame(setImgPosition);
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("mousemove", handleMousemove);
