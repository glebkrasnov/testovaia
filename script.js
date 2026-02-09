/***********************
 * НАСТРОЙКИ
 ***********************/
const PASSWORD = "2"; // ← пароль

/**
 * Список репозиториев по датам
 * Формат даты: YYYY-MM-DD
 */
const REPOSITORIES = [
    {
        date: "2026-02-09",
        url: "https://glebkrasnov.github.io/gift-for-ekaterina",
        icon: "14-512.png"
    },
    {
        date: "2026-02-10",
        url: "https://glebkrasnov.github.io/TheMOON/",
        icon: "8-512.png"
    },
    {
        date: "2026-02-23",
        url: "https://username.github.io/repo-23/",
        icon: "icons/23.png"
    }
];

/***********************
 * ЭЛЕМЕНТЫ
 ***********************/
const authScreen    = document.getElementById("auth-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const errorText     = document.getElementById("auth-error");

/***********************
 * ПРОВЕРКА ПАРОЛЯ
 ***********************/
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
        redirectByDate();
    }, 2500);
}

/***********************
 * РЕДИРЕКТ ПО ДАТЕ
 ***********************/
function redirectByDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // сортируем на всякий случай
    const sorted = REPOSITORIES
        .map(r => ({ ...r, time: new Date(r.date).getTime() }))
        .sort((a, b) => a.time - b.time);

    let selected = sorted[0];

    for (const repo of sorted) {
        if (repo.time <= today.getTime()) {
            selected = repo;
        } else {
            break;
        }
    }

    // редирект
    window.location.href = selected.url;
}

