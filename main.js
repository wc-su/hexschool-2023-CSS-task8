import * as bootstrap from "bootstrap";
import "./assets/scss/all.scss";

// footer
// move footer copyright
const moveCopyRight = document.querySelector("#js-moveCopyRight");
const moveCopyRight_parent = moveCopyRight.parentElement;

window.addEventListener("resize", (e) => moveCopyright(e));
function moveCopyright(e) {
  const width = window.innerWidth;
  if (width >= 1400) {
    // move footer copyright
    if (moveCopyRight.children.length === 1) {
      const copyRightElement = moveCopyRight_parent.lastElementChild;
      moveCopyRight_parent.removeChild(copyRightElement);
      moveCopyRight.appendChild(copyRightElement);
    }
  } else {
    // move footer copyright
    if (moveCopyRight.children.length !== 1) {
      const copyRightElement = moveCopyRight.lastElementChild;
      if (copyRightElement) {
        moveCopyRight.removeChild(copyRightElement);
        moveCopyRight_parent.appendChild(copyRightElement);
      }
    }
  }
}
moveCopyright();
