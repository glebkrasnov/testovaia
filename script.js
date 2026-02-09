/***********************
 * БЛЮР ПО КЛИКУ
 ***********************/
function revealPhoto(wrapper) {
    wrapper.classList.add("revealed");
}

/***********************
 * ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".image-wrapper, .caption, .row, .title, .subtitle, .final-love"
    );

    elements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
});

/***********************
 * АВТОРИЗАЦИЯ + МЕНЮ
 ***********************/
const PASSWORD = "2"; // ← ПОМЕНЯЙ ПАРОЛЬ

const authScreen    = document.getElementById("auth-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const menuScreen    = document.getElementById("menu-screen");
const toastScreen   = document.getElementById("toast-screen");
const wrapper       = document.querySelector(".wrapper");
const errorText     = document.getElementById("auth-error");

function checkPassword() {
    const input = document.getElementById("passwordInput").value;

    if (input !== PASSWORD) {
        errorText.textContent = "Неправильный пароль";
        return;
    }

    errorText.textContent = "";
    authScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

    setTimeout(() => {
        welcomeScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
    }, 2500);
}

function openToast() {
    menuScreen.classList.add("hidden");
    toastScreen.classList.remove("hidden");
    toastScreen.scrollTop = 0;
}

function openStory() {
    menuScreen.classList.add("hidden");
    wrapper.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToMenu() {
    toastScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");
}
