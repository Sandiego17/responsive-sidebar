const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
const themeIcons = document.querySelectorAll(".theme-icon");
const linkItems = document.querySelectorAll(".link-item");
const modeElement = document.querySelector(".mode");

// Toggle sidebar collapse
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapse");

  if (sidebar.classList.contains("collapse")) {
    linkItems.forEach(item => {
      item.classList.add("centered");
    });

    modeElement.classList.add("centered");
  } else {
    linkItems.forEach(item => {
      item.classList.remove("centered");
    });

    modeElement.classList.remove("centered");
  }
});

// Toggle dark mode and icon classes
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeIcons.forEach(icon => {
    icon.classList.toggle("mode-icon");
  });

  modeText.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});
