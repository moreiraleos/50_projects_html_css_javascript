const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let aciveSlide = 0

rightBtn.addEventListener("click", () => {
  aciveSlide++
  if (aciveSlide > slides.length - 1) {
    aciveSlide = 0
  }
  setBgToBody()
  setActiveSlide()
})
leftBtn.addEventListener("click", () => {
  aciveSlide--
  if (aciveSlide < 0) {
    aciveSlide = slides.length - 1
  }
  setBgToBody()
  setActiveSlide()
})
setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[aciveSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })
  slides[aciveSlide].classList.add("acitve")
}
