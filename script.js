// ===== Dark Mode Toggle =====
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ===== Canvas Drawing (Hello Apsani) =====
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Background rectangle
ctx.fillStyle = "purple";
ctx.fillRect(20, 20, 260, 110);

// Text
ctx.font = "26px Arial";
ctx.fillStyle = "white";
ctx.fillText("Hello Apsani", 50, 75);

// ===== Image Slider =====
let slides = document.querySelectorAll(".slide");
let index = 0;

// Create dots dynamically
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("dots");
document.querySelector(".slider").appendChild(dotsContainer);

slides.forEach((slide, i) => {
    let dot = document.createElement("button");
    if(i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        showSlide(i);
        resetAutoplay();
    });
    dotsContainer.appendChild(dot);
});
let dots = dotsContainer.querySelectorAll("button");

// Show slide
function showSlide(n) {
    slides.forEach(s => s.style.display = "none");
    dots.forEach(d => d.classList.remove("active"));
    slides[n].style.display = "block";
    dots[n].classList.add("active");
    index = n;
}

// Prev/Next buttons
const prevBtn = document.createElement("button");
prevBtn.classList.add("prev");
prevBtn.innerText = "❮";
prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    resetAutoplay();
});
const nextBtn = document.createElement("button");
nextBtn.classList.add("next");
nextBtn.innerText = "❯";
nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
    resetAutoplay();
});

// Append buttons to slider
const slider = document.querySelector(".slider");
slider.appendChild(prevBtn);
slider.appendChild(nextBtn);

// Autoplay
let autoplay = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);

function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000);
}

// Initial display
showSlide(0);