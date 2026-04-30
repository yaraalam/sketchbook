// main.js
let sketches = document.querySelectorAll(".sketch");

sketches.forEach(sketch => {
  sketch.addEventListener("click", () => {

    sketch.style.left = Math.random() * 70 + "%";
    sketch.style.top = Math.random() * 70 + "%";

    sketch.style.transform =
      `rotate(${Math.random() * 60 - 30}deg) scale(1.1)`;

  });
});