const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programing!";

let idx = 1;
let speed = 300 / speedEl.value;
writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  if (e.target.value == speedEl.getAttribute("max")) {
    e.target.value = 1;
  } else if (e.target.value == speedEl.getAttribute("min")) {
    e.target.value = 5;
  }
  speed = 300 / e.target.value;
});

// const int = setInterval(writeText, speed);

// function writeText() {
//   textEl.innerText += text[idx];
//   if (idx >= text.length - 1) {
//     clearInterval(int);
// idx = 1;
//   }
//   idx++;
// }
