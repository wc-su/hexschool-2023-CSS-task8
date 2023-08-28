// import * as bootstrap from "bootstrap";

const splitText = document.querySelector(".custom-splitText");
splitText.innerHTML = `<span class="char">${splitText.innerHTML
  .split("")
  .join('</span><span class="char">')}</span>`;

const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

const reviewArea = document.querySelector("#reviewArea");
const reviewList = document.querySelector("#reviewList");
const reviewScroll = document.querySelector("#reviewScroll");
const reviewScrollBar = document.querySelector("#reviewScroll > div");
const listWidth = reviewList.scrollWidth;
const listBarWidth = reviewList.offsetWidth;
const scrollWidth = reviewScroll.offsetWidth;
const scrollBarWidth = reviewScrollBar.offsetWidth;
const rate = (listWidth - listBarWidth) / (scrollWidth - scrollBarWidth);
let listOldY =
  reviewList.style.left.split("px") != ""
    ? parseInt(reviewList.style.left.split("px")[0])
    : 0;
let scrollOldY =
  reviewScrollBar.style.left.split("px") != ""
    ? parseInt(reviewScrollBar.style.left.split("px")[0])
    : 0;
let listNewY,
  scrollNewY = 0;
let startFlag = false;
let mouseStartX = 0;
reviewArea.addEventListener("mousedown", (e) => {
  if (e.target === reviewScrollBar) {
    reviewArea.style.setProperty("cursor", "grabbing");
    mouseStartX = e.clientX;
    startFlag = true;
    listOldY =
      reviewList.style.left.split("px") != ""
        ? parseInt(reviewList.style.left.split("px")[0])
        : 0;
    scrollOldY =
      reviewScrollBar.style.left.split("px") != ""
        ? parseInt(reviewScrollBar.style.left.split("px")[0])
        : 0;
  }
});
reviewArea.addEventListener("mousemove", (e) => {
  if (startFlag) {
    const endX = e.clientX;
    const dis = endX - mouseStartX;
    if (dis >= 0 && scrollOldY + dis + scrollBarWidth > scrollWidth) {
      scrollNewY = scrollWidth - scrollBarWidth;
      listNewY = listOldY - (listWidth - listBarWidth);
    } else if (dis < 0 && scrollOldY + dis <= 0) {
      scrollNewY = 0;
      listNewY = 0;
    } else {
      scrollNewY = scrollOldY + dis;
      listNewY = listOldY - Math.ceil(dis * rate);
    }
    reviewScrollBar.style.setProperty("left", `${scrollNewY}px`, "important");
    reviewList.style.setProperty("left", `${listNewY}px`, "important");
  }
});
reviewArea.addEventListener("mouseup", (e) => resetScroll(e));
reviewArea.addEventListener("mouseleave", (e) => resetScroll(e));
function resetScroll(e) {
  if (startFlag) {
    reviewScrollBar.style.setProperty("left", `${scrollNewY}px`, "important");
    reviewList.style.setProperty("left", `${listNewY}px`, "important");
    reviewArea.style.cursor = "auto";
    startFlag = false;
    scrollNewY = 0;
  }
}
reviewScrollBar.addEventListener("mouseenter", () => {
  reviewArea.style.cursor = "grab";
});
reviewScrollBar.addEventListener("mouseleave", () => {
  if (!startFlag) {
    reviewArea.style.cursor = "auto";
  }
});


const carouselExample = document.querySelector("#carouselExample");
// const carouselArrow = document.querySelector('img[data-bs-target="#carouselExample"]');
// console.log(carouselExample, width);
// console.log(carouselArrow);
// if(width >= 1400) {
//   // carouselExample.setAttribute("data-bs-interval", "");
//   carouselExample.removeAttribute("data-bs-ride");
// }

window.addEventListener("resize", (e) => resizeCarousel(e));
function resizeCarousel(e) {
  // console.log("~~~~");
  const width = window.innerWidth;
  if (width >= 1400) {
    // remove carousel autoplay
    // carouselExample.removeAttribute("data-bs-ride");
    // carouselExample.setAttribute("data-bs-ride", "false");
    // const carousel = new bootstrap.Carousel(carouselExample, {
    //   ride: "false",
    //   // interval: false,
    //   // pause: true
    // });
  } else {
    // carousel autoplay
    // carouselExample.setAttribute("data-bs-ride", "carousel");
    // const carousel = new bootstrap.Carousel(carouselExample, {
    //   ride: "true",
    //   // interval: 5000,
    //   // pause: false
    // });
  }
}
resizeCarousel();
