// -------- PAGE NAVIGATION + MUSIC --------
function go(n) {
  // start music when moving from page 1 to page 2
  if (n === 2) {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
      music.play();
    }
  }

  // change page
  document.querySelector(".active").classList.remove("active");
  document.getElementById("p" + n).classList.add("active");
}

// -------- REPLAY FUNCTION --------
function replay() {
  document.querySelector(".active").classList.remove("active");
  document.getElementById("p1").classList.add("active");

  // restart music from beginning
  const music = document.getElementById("bgMusic");
  music.currentTime = 0;
  music.play();
}

// -------- FALLING ROSES BACKGROUND --------
setInterval(() => {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerText = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (7 + Math.random() * 4) + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}, 800);
