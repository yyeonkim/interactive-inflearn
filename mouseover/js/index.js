const cursorItem = document.querySelector(".cursor-item");
const circle = document.querySelector(".circle");
const buttons = document.getElementsByTagName("button");
// 마우스 위치
let mx;
let my;
// 원 위치
let itemX = 0;
let itemY = 0;
const speed = 0.1; // 원이 움직이는 속도

const handleMousemove = (event) => {
  setMousePosition(event);
  setCursorItemPosition(); // 마우스 따라 cursorItem 움직이기
};

const setMousePosition = (event) => {
  mx = event.clientX;
  my = event.clientY;

  window.requestAnimationFrame(setMousePosition);
};

// 마우스 따라 cursorItem 움직이기
const setCursorItemPosition = () => {
  itemX += (mx - itemX) * speed;
  itemY += (my - itemY) * speed;
  cursorItem.style.transform = `translate(${itemX}px, ${itemY}px)`;
};

const handleMouseover = (event) => {
  changeCircleScale(0.3);
  changeCircleBgColor("purple");
};

const handleMouseout = (event) => {
  changeCircleScale(1);
  changeCircleBgColor("blue");
};

const changeCircleScale = (value) => {
  circle.style.transform = ` scale(${value})`;
};

const changeCircleBgColor = (color) => {
  circle.style.backgroundColor = color;
};

window.onload = () => {
  window.addEventListener("mousemove", handleMousemove);
  buttons[0].addEventListener("mouseover", handleMouseover);
  buttons[1].addEventListener("mouseover", handleMouseover);
  buttons[0].addEventListener("mouseout", handleMouseout);
  buttons[1].addEventListener("mouseout", handleMouseout);
};
