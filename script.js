//  Dark Mode Toggle 
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//  Canvas Drawing (Hello Apsani) 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Background rectangle
ctx.fillStyle = "purple";
ctx.fillRect(20, 20, 260, 110);

// Text
ctx.font = "26px Arial";
ctx.fillStyle = "white";
ctx.fillText("Hello Apsani", 50, 75);

//  Image Slider 
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

//  Back to Top Button 
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//  Contact Form Validation 
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = form.name.value.trim();
    let email = form.email.value.trim();
    let msg = form.message.value.trim();

    if (!name || !email || !msg) {
        alert("Please fill all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email.");
        return;
    }

    form.submit(); 
});
