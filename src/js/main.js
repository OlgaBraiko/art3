import slides from "../../ts/sliders";

window.addEventListener("DOMContentLoaded", () => {
  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  slides(".main-slider-item", "vertical");
});
