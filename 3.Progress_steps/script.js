const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
next.addEventListener("click", () => {
  currentActive++;
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  update();
});
// next.addEventListener("click", () => {
//     console.log(circles[currentActive]);
//     if (currentActive == 3) {
//       currentActive = 3;
//       prev.removeAttribute("disabled");
//       next.setAttribute("disabled", true);
//       return;
//     }
//     currentActive++;
//   });

//   prev.addEventListener("click", () => {
//     console.log(circles[currentActive]);
//     if (currentActive == 1) {
//       currentActive = 1;
//       next.removeAttribute("disabled");
//       prev.setAttribute("disabled", true);
//       return;
//     }
//     currentActive--;
//   });
