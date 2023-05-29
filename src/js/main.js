import slides from "../../ts/sliders";
import form from "../../ts/forms";

window.addEventListener("DOMContentLoaded", () => {
  slides(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  slides(".main-slider-item", "vertical");
  form();
});
