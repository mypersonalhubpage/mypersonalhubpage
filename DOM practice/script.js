const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

var videos = document.querySelectorAll("video");
for (var i = 0; i < videos.length; i++)
  videos[i].addEventListener(
    "play",
    function () {
      pauseAll(this);
    },
    true
  );

function pauseAll(elem) {
  for (var i = 0; i < videos.length; i++) {
    //Is this the one we want to play?
    if (videos[i] == elem) continue;
    //Have we already played it && is it already paused?
    if (videos[i].played.length > 0 && !videos[i].paused) {
      // Then pause it now
      videos[i].pause();
    }
  }
}

const slide = document.querySelector(".slider-container");
const videoList = document.querySelectorAll(".slider-container video");
// Slider buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter1 = 1;
const size = 889;

slide.style.transform = "translateX(" + -size * counter1 + "px)";

//Button Listener

nextBtn.addEventListener("click", () => {
  if (counter1 >= videoList.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter1++;
  slide.style.transform = "translateX(" + -size * counter1 + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter1 <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter1--;
  slide.style.transform = "translateX(" + -size * counter1 + "px)";
});

slide.addEventListener("transitionend", () => {
  if (videoList[counter1].id === "lastClone") {
    slide.style.transition = "none";
    counter1 = videoList.length - 2;
    slide.style.transform = "translateX(" + -size * counter1 + "px)";
  }
});

slide.addEventListener("transitionend", () => {
  if (videoList[counter1].id === "firstClone") {
    slide.style.transition = "none";
    counter1 = videoList.length - counter1;
    slide.style.transform = "translateX(" + -size * counter1 + "px)";
  }
});
