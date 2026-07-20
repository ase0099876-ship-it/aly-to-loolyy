// =======================
// القلوب المتحركة
// =======================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);


// =======================
// الكتابة حرف حرف
// =======================

const typing = document.getElementById("typing");

const message = `

عارف ان كلام مش هيصلح كل حاجه حابب اقولك حقكك عليا ينور عيني عارف انك زعلتي جامد وعارف ان افورت جامد بس حقكك عليا مقصدش ازعلك ينور عيني

`;

let i = 0;

function typeWriter() {

    if (!typing) return;

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

setTimeout(typeWriter, 1200);


// =======================
// ظهور العناصر أثناء السكرول
// =======================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.2

});

reveals.forEach(section => {

    observer.observe(section);

});


// =======================
// عداد الحب
// =======================

// غير التاريخ ده لبداية علاقتكم
const startDate = new Date(2024, 2, 1, 0, 0, 0);

const counter = document.getElementById("counter");

function updateCounter() {

    if (!counter) return;

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    counter.innerHTML =
        `${days} يوم<br>${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;

}

updateCounter();

setInterval(updateCounter, 1000);


// =======================
// زر سامحيني
// =======================

const loveBtn = document.getElementById("loveBtn");

if (loveBtn) {

    loveBtn.addEventListener("click", () => {

        loveBtn.innerHTML = "❤️  احلى شهد ف الدنياا ..بحبك❤️";

        for (let i = 0; i < 60; i++) {

            setTimeout(createHeart, i * 80);

        }

    });

}