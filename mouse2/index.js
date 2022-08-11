const imgs = document.querySelectorAll("img");
const bird = document.querySelector("video");
// 마우스 위치
let mx;
let my;
// 이미지 위치
let objectX = 0;
let objectY = 0;
const speed = 0.05;

const handleMousemove = (event) => {
  makeZeroInCenter(event); // 가운데를 (0, 0)으로 설정
  setObjectPosition(); // 이미지 위치 설정
};

const makeZeroInCenter = (event) => {
  mx = event.clientX - window.innerWidth / 2;
  my = event.clientY - window.innerHeight / 2;
};

const setObjectPosition = () => {
  objectX += (mx - objectX) * speed;
  objectY += (my - objectY) * speed;

  for (let i = 1; i < 4; i++) {
    imgs[i].style.transform = `translate(${-objectX}px, ${-objectY}px)`;
    objectX /= 2;
    objectY /= 2;
  }
  bird.style.transform = `translate(${objectX}px, ${objectY}px)`;
};

window.addEventListener("mousemove", handleMousemove);
