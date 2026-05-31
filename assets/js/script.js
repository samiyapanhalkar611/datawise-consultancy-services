// --------------------- //
// Cookies //
// --------------------- //
const cookieBox = document.querySelector(".cookies"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "acceptBtn") {
        // Accept: remember for 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      } else if (button.id == "declineBtn") {
        // Decline: remember for 1 day so banner doesn't reappear on every page
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24;
      }
    });
  });
};

window.addEventListener("load", executeCodes);