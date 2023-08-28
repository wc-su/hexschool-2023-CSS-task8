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

const reviewArea = document.getElementById("reviewArea");
const reviewList = document.getElementById("reviewList");
const reviewScroll = document.getElementById("reviewScroll");
const reviewScrollBar = document.getElementById("reviewScrollBar");
const listWidth = reviewList.scrollWidth;
const listBarWidth = reviewList.offsetWidth;
const scrollWidth = reviewScroll.offsetWidth;
const scrollBarWidth = reviewScrollBar.offsetWidth;
const rate = (listWidth - listBarWidth) / (scrollWidth - scrollBarWidth);
let listOldY = 0;
let scrollOldY = 0;
let startFlag = false;
let mouseStartX = 0;

reviewScrollBar.addEventListener("mouseenter", (e) => {
  // 接觸到 scroll bar 時，如果沒有在移動就將鼠標改成「手掌」
  if (!startFlag) {
    reviewArea.style.cursor = "grab";
  }
});
reviewScrollBar.addEventListener("mouseleave", (e) => {
  // 離開 scroll bar，如果沒有在移動就將鼠標改成「預設」
  if (!startFlag) {
    reviewArea.style.cursor = "auto";
  }
});
// 用 reviewArea 當作可移動的範圍，只要按下（未放開）滑鼠，在不離開 reviewArea 的範圍都可以移動 scroll bar (reviewScrollBar)
reviewArea.addEventListener("mousedown", (e) => {
  if (e.target === reviewScrollBar) {
    // 按下 scroll bar，沒有在移動時就將鼠標改成「抓握」
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
    let listNewY = 0;
    let scrollNewY = 0;

    const dis = e.clientX - mouseStartX;

    if (dis >= 0 && scrollOldY + dis + scrollBarWidth > scrollWidth) {
      scrollNewY = scrollWidth - scrollBarWidth;
      listNewY = listBarWidth - listWidth; // 反向所以減完是負數
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
    reviewArea.style.cursor = "auto";
    startFlag = false;
  }
}


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
