// Перемикання теми
document.getElementById("theme-toggle").addEventListener("click", () => {
    const themeStyle = document.getElementById("theme-style");
    themeStyle.href = themeStyle.href.includes("light") 
        ? "styles/dark-theme.css" 
        : "styles/light-theme.css";
});

// Зміна мови (приклад)
document.getElementById("language-selector").addEventListener("change", (e) => {
    if (e.target.value === "en") {
        document.getElementById("site-title").textContent = "Ukrainian News";
        document.getElementById("search-input").placeholder = "Search...";
    } else {
        document.getElementById("site-title").textContent = "Новини України";
        document.getElementById("search-input").placeholder = "Пошук...";
    }
});