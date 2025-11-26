// Dark Mode Toggle
const btn = document.getElementById("modeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    btn.textContent =
        document.body.classList.contains("light") ? "🌚" : "🌙";
});
