const toggle = document.getElementById("toggleTheme");
let dark = false;

toggle.addEventListener("click", () => {
  dark = !dark;

  if (dark) {
    document.documentElement.style.setProperty("--bg", "#121212");
    document.documentElement.style.setProperty("--text", "#ffffff");
    toggle.textContent = "☀️";
  } else {
    document.documentElement.style.setProperty("--bg", "#ffffff");
    document.documentElement.style.setProperty("--text", "#2b2b2b");
    toggle.textContent = "🌙";
  }
});
