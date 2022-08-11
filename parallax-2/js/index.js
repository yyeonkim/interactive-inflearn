let scrollTop = 0;
const progressBar = document.querySelector(".progress-bar");
const imgArr = document.querySelectorAll(".parallax-image");
const totalImg = imgArr.length;

const handleScroll = (event) => {
  scrollTop = this.scrollY;
  setProgressBarWidth();
  transformScaleImgs();
};

const setProgressBarWidth = () => {
  const scrollHeight = document.body.scrollHeight;
  const innerHeight = this.innerHeight;
  const percentage = Math.ceil(
    (scrollTop / (scrollHeight - innerHeight)) * 100
  );
  progressBar.style.width = `${percentage}%`;
};

const transformScaleImgs = () => {
  for (let i = 0; i < totalImg; i++) {
    imgArr[i].style.transform = `perspective(40rem) translateZ(${
      scrollTop / ((totalImg - i) * 5)
    }px)`;
  }
};

window.addEventListener("scroll", handleScroll);
