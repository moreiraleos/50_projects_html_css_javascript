const buttons = document.querySelectorAll("nav ul li");
const imgs = document.querySelectorAll(".phone .content");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    removeActive();
    removeShow();
    button.classList.add("active");
    imgs[idx].classList.add("show");
  });
});

function removeActive() {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function removeShow() {
  imgs.forEach((img) => {
    img.classList.remove("show");
  });
}
