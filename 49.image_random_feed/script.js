const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random";
const rows = 5;

container.innerHTML = "";

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}/${getRandomSize()}`;
  img.classList.add("image");
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomnr()}x${getRandomnr()}`;
}

function getRandomnr() {
  return Math.floor(Math.random() * 10) + 300;
}
// source.unsplash.com/random/300x300
