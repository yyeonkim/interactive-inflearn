let human = document.querySelector(".human");
let city = document.querySelector(".city");

// 마우스 위치
let mx = 0;
let my = 0;
let humanX = 0;
let humanY = 0;
let cityX = 0;
let cityY = 0;
const humanSpeed = 0.05;
const citySpeed = 0.01;

const handleMousemove = (event) => {
  setZeroInCenter(event);
  setHumanPosition();
  setCityPosition();
};

// 화면 가운데를 (0, 0)으로 설정
const setZeroInCenter = (event) => {
  mx = event.clientX - window.innerWidth / 2;
  my = event.clientY - window.innerHeight / 2;
};

const setHumanPosition = () => {
  humanX = (mx - humanX) * -humanSpeed;
  humanY = (my - humanY) * -humanSpeed;
  human.style.transform = `translate(${humanX}px, ${humanY}px)`;

  window.requestAnimationFrame(setHumanPosition);
};

const setCityPosition = () => {
  cityX = (mx - cityX) * citySpeed;
  cityY = (my - cityY) * citySpeed;
  city.style.transform = `translate(${cityX}px, ${cityY}px)`;

  window.requestAnimationFrame(setCityPosition);
};

window.addEventListener("mousemove", handleMousemove);
