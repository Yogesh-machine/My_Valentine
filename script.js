const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const heartsContainer = document.getElementById("hearts-container");
const collage = document.getElementById("collage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

const music = document.getElementById("bg-music");

/* ❤️ HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

/* 🎵 PAGE 1 → PAGE 2 */
page1.addEventListener("click", () => {
  music.volume = 0;
  music.play().catch(() => {});
  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.05;
    music.volume = vol;
    if (vol >= 0.7) clearInterval(fade);
  }, 200);

  page1.classList.remove("active");
  page2.classList.add("active");
  startCollage();
});

/* 📸 ALL IMAGES */
const imageFiles = [
  "birthday_love.jpeg",
  "shooting_love.jpeg",
  "lov0.jpeg","lov1.jpeg","lov2.jpeg","lov3.jpeg","lov4.jpeg",
  "lov5.jpeg","lov6.jpeg","lov7.jpeg","lov8.jpeg","lov9.jpeg",
  "lov10.jpeg","lov11.jpeg","lov12.jpeg"
];

function startCollage() {
  imageFiles.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    img.className = "collage-img";

    const x = Math.random() * 80 + 5;
    const y = Math.random() * 80 + 5;
    const r = Math.random() * 20 - 10;

    img.style.left = x + "vw";
    img.style.top = y + "vh";
    img.style.transform = `translateY(200px) rotate(${r}deg)`;

    collage.appendChild(img);

    setTimeout(() => {
      img.style.opacity = 1;
      img.style.transform = `translateY(0) rotate(${r}deg)`;
    }, 300 + i * 120);

    animateImage(img);
  });
}

function animateImage(img) {
  setInterval(() => {
    const x = Math.random() * 80 + 5;
    const y = Math.random() * 80 + 5;
    const r = Math.random() * 20 - 10;
    img.style.transform = `translate(${x - 50}px, ${y - 50}px) rotate(${r}deg)`;
  }, 6000 + Math.random() * 4000);
}

/* 📈 YES GROWS, NO SHRINKS */
let yesScale = 1, noScale = 1;
const sizeInterval = setInterval(() => {
  yesScale += 0.08;
  noScale -= 0.05;
  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${Math.max(noScale, 0.25)})`;
}, 1000);

/* 😈 NO RUNS */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform =
    `translate(${x}px, ${y}px) scale(${Math.max(noScale, 0.25)})`;
});

/* 💍 YES CLICK */
yesBtn.addEventListener("click", () => {
  clearInterval(sizeInterval);
  result.classList.remove("hidden");
  result.textContent =
    "HEHEHE 💕 I knew it. Happy Valentine’s, my bubudaaaaaaa 💍💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
