const btn = document.getElementById("toggle");
const navigation = document.getElementById("nav");
btn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
