const title = document.querySelector("h1");
const coverImg = document.querySelector(".cover-img");
const cover = document.querySelector(".cover");

cover.style.opacity = 0.3;

const handleScroll = (event) => {
  const scrollTop = document.documentElement.scrollTop;

  // Move title up
  title.style.transform = `translate(0, ${-scrollTop / 5}px)`;
  // Scale up image and cover
  coverImg.style.transform = `scale(${1 + scrollTop / 1000})`;
  cover.style.transform = `scale(${1 + scrollTop / 1000})`;
  // Set opacity of cover
  cover.style.opacity = 0.3 + scrollTop / 1000;
};

window.addEventListener("scroll", handleScroll);
